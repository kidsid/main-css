var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    gulp.src('src/app.scss')
      .pipe(gulp.dest('build/'))
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['sass'])
});

gulp.task('default', 'watch');
