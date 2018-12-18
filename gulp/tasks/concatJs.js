var gulp    = require('gulp');
var config  = require('../config').production;
var size    = require('gulp-filesize');
var concat = require('gulp-concat');

gulp.task('concatJs', ['browserify'], function() {
	return gulp.src([
					config.jsSrc + 'scripts.js'
	                ])
	    .pipe(concat('scripts.js'))
	    .pipe(gulp.dest(config.jsDest));
});
