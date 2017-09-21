const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

gulp.task('serve', ['sass'], function() {
});

gulp.task('sass', function() {
    return gulp.src(['styles/*.scss', 'styles/*.css'])
        .pipe(watch('styles/*.scss'))
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);
