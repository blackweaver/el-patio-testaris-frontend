var gulp = require('gulp');
var runSequence = require('run-sequence');

// Run this to compress all the things!
gulp.task('production', function(){
  runSequence('images', 'minifyCss', 'concatJs', 'uglifyJs','fonts');
});
