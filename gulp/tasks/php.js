var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var config       = require('../config').php;

gulp.task('php', function () {
  return gulp.src(config.src).pipe(browserSync.reload({stream:true}));
});
