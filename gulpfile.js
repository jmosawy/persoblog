const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const header = require('gulp-header');

var banner = ['/**',
  ' * Developed by Jeff Mosawy',
  ' */',
  ''].join('\n');

gulp.task('sass', () => {
  return gulp.src([
    './src/sass/**/*.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss())
    .pipe(header(banner))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('default', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass'])
});
