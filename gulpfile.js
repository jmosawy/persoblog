const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

gulp.task('sass', () => {
  return gulp.src([
    './src/sass/**/*.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});
