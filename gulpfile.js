var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('src/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/'))
});
