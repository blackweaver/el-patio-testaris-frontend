var gulp = require('gulp');
var runSequence = require('run-sequence');

// Run this to compress all the things!
gulp.task('production', function(){
  // gulp.start(['images', 'minifyCss', 'concatJs', 'uglifyJs','fonts']);
  runSequence('images', 'minifyCss', 'concatJs', 'uglifyJs','fonts');
  // runSequence('checkIfInDevelop', 'localPullAndPushToDevelop', 'commitContentOnRemote', 'localPullMergeAndPushToMaster', 'pullMasterOnRemote', 'moveToDevelop', 'mergeMaster', callback);
});
