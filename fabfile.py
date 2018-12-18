#!/usr/bin/python
# -*- coding: UTF-8 -*-

###################################
# Python Standard Library imports #
###################################
import os

#######################
# Third party imports #
#######################
from fabric.api import env, run, cd, local
from fabric.colors import red, green, cyan
from fabric.contrib.console import confirm
global env

env.use_ssh_config = True

# Project specific
project_name = "Testaris"
local_project_domain = "local.testaris.ch"
remote_project_base_dir = "~/projects/testaris.prj"
env.host_string = 'testaris'

# General
local_project_dir = os.path.dirname(os.path.realpath(__file__))
local_project_build_dir = local_project_dir + 'build/'
backup_folder = "backups"
backup_db_subfolder = "db"
backup_files_subfolder = "files"

# Icons
icon_checking = '[ ' + cyan('~') + ' ] '
icon_error = '[ ' + red('✘') + ' ] '
icon_success = '[ ' + green('✔') + ' ] '


# Production
# def production_deploy(sync_db=False, sync_media=False):
#     env.host_string = 'redutsserver'
#     global remote_server_alias, remote_project_domain, remote_project_base_dir, environment_to_deploy
#     environment_to_deploy = 'production'
#     remote_server_alias = 'redutsserver'
#     remote_project_domain = "reduts.com.uy"
#     remote_project_base_dir = "/projects/reduts.prj"
#     _start_deploy(sync_db, sync_media)


# Staging
def staging_deploy(sync_db=False, sync_media=False):
    env.host_string = 'testaris'
    global remote_server_alias, remote_project_domain, remote_project_base_dir, environment_to_deploy
    environment_to_deploy = 'staging'
    remote_server_alias = 'testaris'
    remote_project_domain = "staging.testaris.ch"
    remote_project_base_dir = "~/projects/reduts.prj"
    _start_deploy(sync_db, sync_media)


# # Development
# def development_deploy(sync_db=False, sync_media=False):
#     env.host_string = 'kbzcomuy@kbz.com.uy'
#     global remote_server_alias, remote_project_domain, remote_project_base_dir, environment_to_deploy
#     environment_to_deploy = 'development'
#     remote_server_alias = 'kbzcomuy@kbz.com.uy'
#     remote_project_domain = "performingartsselection.clients.elpatiostudio.com"
#     remote_project_base_dir = "~/projects/reduts.prj"
#     _start_deploy(sync_db, sync_media)


# Git scripts
def _current_branch():
    with cd(local_project_dir):
        branch = local('git rev-parse --abbrev-ref HEAD', capture=True)
        return branch


def _branch_is_clean(branch_name):
    with cd(local_project_dir):
        branch_status = local('git status --porcelain')

    if branch_status != '':
        print icon_error + '-- Current branch is not clean, please commit your changes before continue --'
        return False
    else:
        return True


# Deployment scripts
def _start_deploy(sync_db=False, sync_media=False):
    global icon_checking, icon_error, icon_success, local_backup_db_file_on_server, local_backup_db_file_path, remote_backup_db_folder, remote_backup_db_file_path, local_backup_db_file_path, local_backup_db_file_name, remote_backup_db_file_name, remote_time_stamp, local_uploads_folder, remote_uploads_folder

    if not confirm(icon_checking + 'This action will deploy to the >>> ' + red(environment_to_deploy) + ' environment located in ' + red(remote_server_alias) + ' <<< site, are you sure?', default=False):
        return

    local_uploads_folder = local_project_dir + "/build/wp-content/uploads/"
    remote_uploads_folder = remote_server_alias + ':' + remote_project_base_dir + "/build/wp-content/uploads/"

    if sync_db and _get_remote_time_stamp():
        local_backup_db_file_name = remote_time_stamp + "_" + project_name + "_local_db.sql"
        local_backup_db_file_path = local_project_dir + "/" + backup_folder + "/" + backup_db_subfolder + "/" + local_backup_db_file_name
        remote_backup_db_file_name = remote_time_stamp + "_" + project_name + "_remote_db.sql"
        remote_backup_db_folder = remote_server_alias + ":" + remote_project_base_dir + "/" + backup_folder + "/" + backup_db_subfolder + "/"
        remote_backup_db_file_path = remote_project_base_dir + "/" + backup_folder + "/" + backup_db_subfolder + "/" + remote_backup_db_file_name
        local_backup_db_file_on_server = remote_project_base_dir + "/" + backup_folder + "/" + backup_db_subfolder + "/" + local_backup_db_file_name

    if not (_local_development_deploy(sync_db) and _remote_development_deploy(sync_db) and flush_cache()):
        _finish_deploy(True)
    else:
        if sync_media == 'push':
            _sync_media_local_to_remote()
        elif sync_media == 'pull':
            _sync_media_remote_to_local()
        _finish_deploy()


def _finish_deploy(errors=False):
    if errors:
        print icon_error + '-- deploy process finished with errors --'
    else:
        print icon_success + '-- deploy process finished correctly --'


def _get_remote_time_stamp():
    global remote_time_stamp
    print icon_checking + '-- checking connection to server --'
    remote_time_stamp = run('echo $(date +%Y-%m-%d_%H-%M-%S)')

    if not remote_time_stamp:
        print icon_error + '-- connection to server could not be stablished --'
        return False
    else:
        print icon_success + '-- connection to server confirmed, continue with deploy --'
        return True


def _local_development_deploy(sync_db=False):
    with cd(local_project_dir):
        local('mkdir -p ' + local_project_dir + '/' + backup_folder + '/' + backup_db_subfolder)
        local('mkdir -p ' + local_project_dir + '/' + backup_folder + '/' + backup_files_subfolder)

    current_branch = _current_branch()

    if current_branch != 'develop':
        print icon_error + '-- you have to be in master branch to deploy --'
        return False

    if _branch_is_clean(current_branch):
        wp_cli_version = local('wp cli version', capture=True)
        print icon_checking + '-- check if WP-CLI is installed locally --'
        if not wp_cli_version.startswith('WP-CLI'):
            print icon_error + '-- WP-CLI is not installed locally, please proceed to install it before continue --'
            return False
        else:
            print icon_success + '-- WP-CLI is installed locally --'
            if not local_pull_push():
                return False

        if sync_db:
            _dump_local_db(local_backup_db_file_path) and _copy_local_db_to_remote(local_backup_db_file_path, remote_backup_db_folder)

        return True
    else:
        return False


def _remote_development_deploy(sync_db=False):
    with cd(remote_project_base_dir):
        run('mkdir -p ' + backup_folder + '/' + backup_db_subfolder)
        run('mkdir -p ' + backup_folder + '/' + backup_files_subfolder)

    if not remote_pull_push():
        return False

    if sync_db:
        _dump_remote_db(remote_backup_db_file_path) and _populate_remote_db_from_local_db_dump(local_backup_db_file_on_server) and _search_and_replace(local_project_domain, remote_project_domain)

    return True


def local_pull_push():
    print icon_checking + '-- pull and push local branch --'

    if not local('git pull && git push'):
        print icon_success + '-- local branch pulled and pushed --'
        return True
    else:
        print icon_error + '-- local branch could not be pulled and pushed --'
        return False


def remote_pull_push():
    print icon_checking + '-- pull and push remote server --'
    with cd(remote_project_base_dir):
        run('git pull')
        branch_status = run('git status --porcelain')
    if branch_status != '':
        print icon_error + '-- remote branch is not clean, please commit your changes before continue --'
        return False
    else:
        print icon_success + '-- remote branch clean --'
        return True


def _dump_local_db(target):
    print icon_checking + '-- start local db export --'
    local('wp db export --add-drop-table %s' % target)
    print icon_success + '-- end local db export --'
    return True


def _copy_local_db_to_remote(source, target):
    print icon_checking + '-- copying local db dump to server --'
    local('scp %s %s' % (source, target))
    print icon_success + '-- local db copied to server --'
    return True


def _dump_remote_db(target):
    print icon_checking + '-- start remote server db export --'
    with cd(remote_project_base_dir):
        run('wp db export --add-drop-table %s' % target)
    print icon_success + '-- end remote server db export --'
    return True


def _populate_remote_db_from_local_db_dump(source):
    print icon_checking + '-- start remote db import from local dump --'
    with cd(remote_project_base_dir):
        run('wp db import %s' % source)
    print icon_success + '-- end remote db import from local dump --'
    return True


def _search_and_replace(source, target):
    print icon_checking + '-- start search and replace in remote db --'
    with cd(remote_project_base_dir):
        run('wp search-replace %s %s --skip-columns=guid' % (source, target))
    print icon_success + '-- search and replace in remote db finished --'
    _remove_backups()
    return True


def _remove_backups():
    # with cd(local_project_dir):
    #     local('find ' + local_project_dir + '/' + backup_folder + '/' + backup_db_subfolder + '/*.sql -type f | sort -r | tail -n +11 | xargs rm --')

    # with cd(remote_project_base_dir):
    #     run('find ' + backup_folder + '/' + backup_db_subfolder + '/*.sql -type f | sort -r | tail -n +21 | xargs rm --')

    return True


def _sync_media_local_to_remote():
    print icon_checking + '-- start pushing uploads --'
    with cd(local_project_dir):
        local('rsync -avzh %s %s' % (local_uploads_folder, remote_uploads_folder))
    print icon_success + '-- end pushing uploads --'


def _sync_media_remote_to_local():
    print icon_checking + '-- start pulling uploads --'
    with cd(local_project_dir):
        local('rsync -avzh %s %s' % (remote_uploads_folder, local_uploads_folder))
    print icon_success + '-- end pulling uploads --'


def flush_cache():
    # print icon_checking + '-- start flushing local cache --'
    # with cd(local_project_dir):
    #     local('php -f ' + local_project_dir + '/build/reset_caches.php')
    # print '\n'
    # print icon_success + '-- end flushing local cache --'

    # print icon_checking + '-- start flushing remote cache --'
    # with cd(remote_project_base_dir):
    #     run('php -f build/reset_caches.php')
    # print icon_success + '-- end flushing remote cache --'

    return True
