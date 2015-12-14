/// <reference path="typings/tsd.d.ts" />

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('default', ['copy-html', 'compile-ts'], function () { });

gulp.task('clean-html', function () {
  gulp.src(['wwwroot/**/*.html', 'wwwroot/**/*.ejs'])
    .pipe(clean());
});

gulp.task('clean-api', function () {
  gulp.src(['**/*.js', '!gulpfile.js', '!node_modules/**/*.*', '!typings/**/*.*', '!wwwroot/**/*.*'])
    .pipe(clean());
});

gulp.task('clean-app', function () {
  gulp.src(['wwwroot/js/app.js'])
    .pipe(clean());
});

gulp.task('copy-html', ['clean-html'], function () {
  gulp.src(['app/**/*.html', 'app/**/*.ejs'])
    .pipe(gulp.dest('wwwroot'));
});

gulp.task('compile-ts', ['compile-ts-app', 'compile-ts-api'], function () { });

gulp.task('compile-ts-api', ['clean-api'], function () {
  var proj = tsc.createProject('tsconfig.json');
  proj.src().pipe(tsc(proj)).js.pipe(gulp.dest('./'));
});

gulp.task('compile-ts-app', ['clean-app'], function () {
  var proj = tsc.createProject('app/tsconfig.json');
  proj.src().pipe(tsc(proj)).js.pipe(gulp.dest('wwwroot/js'));
});

gulp.task('sourcemap-app', ['compile-ts-app'], function () {
});

gulp.task('watch', function () {
  gulp.watch(['**/*.*'], ['default']);
});
