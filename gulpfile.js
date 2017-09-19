const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('serve', ['sass'], function() {
});

gulp.task('sass', function() {
    return gulp.src(['styles/*.scss', 'styles/*.css'])
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve']);
