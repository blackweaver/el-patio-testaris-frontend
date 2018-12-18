var gulp = require('gulp');
var sshConfig = require('../config').ssh;
var runSequence = require('run-sequence');
var promptly = require('promptly');
var chalk = require('chalk');

gulp.task('deploy', function (callback) {
  promptly.confirm('Are you sure to deploy to '+ chalk.green(sshConfig.host + ':' + sshConfig.baseDir) +'?\nType '+ chalk.green("'yes'") + ' or ' + chalk.green("'no'") + '\n ', function (err, value) {
    if (value){
      console.log('Deploy starts...');
      //runSequence('checkIfInDevelop', 'localPullAndPushToDevelop', 'commitContentOnRemote', 'localPullMergeAndPushToMaster', 'pullMasterOnRemote', 'moveToDevelop', 'mergeMaster', callback);
    } else {
      console.log('Deploy canceled');
    }
  });
})
