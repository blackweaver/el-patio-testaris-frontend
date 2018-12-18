'use strict';

var fs = require('fs');
var gulp = require('gulp')
var sshConfig = require('../config').ssh;
var runSequence = require('run-sequence');
var chalk = require('chalk');
var git = require('gulp-git');
var simpleSSH = require('simple-ssh');

function prettyLog(message, color, prefix) {
  if (color === undefined) color = 'magenta';
  if (prefix === undefined) prefix = '• ';
  console.log(chalk[color]('         ' + prefix + message));
}

function prettyLogChecked(message) {
  prettyLog(message, 'green', '✓ ');
}

function getCurrentBranch(callback) {
  git.exec({args : 'rev-parse --abbrev-ref HEAD'}, function(err, stdout) {
    callback(err, stdout.replace(/\n$/, ''));
  });
}

gulp.task('currentBranch', function(){
  getCurrentBranch(function(err, branchName){
    if (err) throw err;
    prettyLog('currentBranch: ' + branchName);
  });
});

// fn to switch to branch
// callback is needed for runSequence
function moveToBranch(branchName, callback) {
  git.checkout(branchName, function(err) {
    if (err) throw err;
    callback();
  });
}

// fn to push branch
// callback is needed for runSequence
function pullBranch(branchName, callback) {
  git.pull('', branchName, {}, function(err) {
    if (err) throw err;
    callback();
  });
}

// fn to push branch
// callback is needed for runSequence
function pushBranch(branchName, callback) {
  git.push('', branchName, {}, function(err) {
    if (err) throw err;
    callback();
  });
}

// fn to merge branches
// callback is needed for runSequence
function mergeBranch(branchName, callback) {
  git.merge(branchName, function(err) {
    if (err) throw err;
    callback();
  });
}

// Local - Tree status
gulp.task('checkIfInDevelop', function(callback){
  prettyLog('Checking if working directory is in branch develop...');
  getCurrentBranch(function(err, branchName){
    if (err) throw err;
    if(branchName !== 'develop'){
      callback(new Error(chalk.red('You need to be in branch "develop" before deploying. Current branch: "' + branchName + '".')));
    }else{
      prettyLogChecked('Checked');
      callback();
    }
  });
});

// Local - Run git pull
gulp.task('pull', function(callback){
  prettyLog('Pulling changes...');
  git.pull('', '', {}, function(err) {
    if (err) throw err;
    prettyLogChecked('Pulled');
    callback();
  });
});

// Local - Checkout master
gulp.task('moveToMaster', function(callback){
  prettyLog('Moving to branch master');
  moveToBranch('master', callback);
});

// Local - Checkout develop
gulp.task('moveToDevelop', function(callback){
  prettyLog('Moving to branch develop');
  moveToBranch('develop', callback);
});

// Local - Run git merge develop
gulp.task('mergeDevelop', function(callback){
  prettyLog('Merging develop branch');
  mergeBranch('develop', callback);
});

// Local - Run git merge master
gulp.task('mergeMaster', function(callback){
  prettyLog('Merging master branch');
  mergeBranch('master', callback);
});

// Local - Run git push master
gulp.task('pushMaster', function(callback){
  prettyLog('Pushing master branch');
  pushBranch('master', callback);
});

// Local - Run git push develop
gulp.task('pushDevelop', function(callback){
  prettyLog('Pushing develop branch');
  pushBranch('develop', callback);
});

// Local - Pull develop, push and move to master
gulp.task('localPullAndPushToDevelop', function(callback) {
  prettyLog('Starting local pull and push to develop...');
  runSequence('moveToDevelop', 'pull', 'pushDevelop', function(err){
    if (err) throw err;
    prettyLogChecked('Done');
    callback();
  });
});

// Local - Pull master, merge develop into it and push it to repo
gulp.task('localPullMergeAndPushToMaster', function(callback) {
  prettyLog('Starting local pull, merge and push to master...');
  runSequence('moveToMaster', 'pull', 'mergeDevelop', 'pushMaster', function(err){
    if (err) throw err;
    prettyLogChecked('Done');
    callback();
  });
});

// Remote - Commit content changes made by user
gulp.task('commitContentOnRemote', function(callback) {
  prettyLog('Starting SSH connection to pull changes in project\'s folder and commit content changes if needed...');
  var ssh = new simpleSSH(sshConfig);
  ssh
    .exec('git add --all . && git commit -am "Merging remote content changes" && git pull && git push', {
      exit: function(code, stdout, stderr) {
        if (stdout) prettyLog(stdout, 'yellow', '> ');
        if (stderr) prettyLog(stderr, 'red', '> ');
        prettyLogChecked('Done');
        callback();
      }
    })
    .start({
      fail: function(ssherr){
        moveToBranch('develop', function(err){
          if (err) throw err;
          callback(new Error(chalk.red('Error when trying to commits changes on remote server: ' + ssherr + '".')));
        });
      }
    });
});

// Remote - Pull master
gulp.task('pullMasterOnRemote', function(callback) {
  prettyLog('Pulling master on remote server...');
  var ssh = new simpleSSH(sshConfig);
  ssh
    .exec('git pull', {
      exit: function(code, stdout, stderr) {
        if (stdout) prettyLog(stdout, 'yellow', '> ');
        if (stderr) prettyLog(stderr, 'red', '> ');
        prettyLogChecked('Done');
        callback();
      }
    })
    .start({
      fail: function(ssherr){
        moveToBranch('develop', function(err){
          if (err) throw err;
          callback(new Error(chalk.red('Error when trying to pull master on remote server: ' + ssherr + '".')));
        });
      }
    });
});
