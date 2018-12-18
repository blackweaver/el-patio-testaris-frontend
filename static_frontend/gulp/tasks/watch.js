/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp        = require('gulp');
var config      = require('../config');
var browserSync = require('browser-sync');

// gulp.task('watch', ['watchify', 'browserSync', 'scripts'], function() {
gulp.task('watch', ['watchify', 'browserSync', 'scripts', 'concatJs'], function() {
  gulp.watch(config.fonts.src, ['fonts']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.scripts.src + '/**', ['scripts']);
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.php.src, ['php']);
  // gulp.watch([config.production.jsDest  + '/**', '!' + config.production.jsDest  + '/scripts.js'], ['concatJs']);
});
