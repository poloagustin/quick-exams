/// <reference path="typings/tsd.d.ts" />

var gulp = require('gulp');
var tsc = require('gulp-tsc');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('default', ['clean', 'copy-html', 'compile-ts'], function () { });

gulp.task('clean', function () {
  gulp.src(['wwwroot/**/*.html', '**/*.js', '!gulpfile.js'])
    .pipe(clean());
});

gulp.task('copy-html', function () {
  gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('compile-ts', ['compile-ts-app', 'compile-ts-api'], function () { });

gulp.task('compile-ts-api', function () {
  gulp.src(['**/*.ts', '!app/**/*.ts'])
    .pipe(tsc({ sourceMap: true }))
    .pipe(gulp.dest('/'));
});

gulp.task('compile-ts-app', function () {
  gulp.src(['app/**/*.ts'])
    .pipe(tsc({
      sourceMap: true,
      out: 'app.js'
    }))
    .pipe(gulp.dest('/wwwroot/js'));
});
