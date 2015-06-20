var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var gulpPlugins = require('gulp-load-plugins')();

var paths = {
  sass: ['./scss/**/*.scss'],
  less: ['./src/**/*.less'],
  jade: ['./src/**/*.jade'],
  js: ['./src/**/*.js'],
  dist: 'www/'
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('less', function () {
  return gulp.src(paths.less)
      .pipe(gulpPlugins.plumber())
      .pipe(gulpPlugins.less({compress: true}))
      .pipe(gulp.dest(paths.dist));
});


gulp.task('jade', function() {
  gulp.src(paths.jade)
      .pipe(gulpPlugins.jade())
      .pipe(gulp.dest(paths.dist))
});


gulp.task('js', function() {
  gulp.src(paths.js)
      .pipe(gulp.dest(paths.dist));
});
