try {
  // Gulp plugins
  var gulp       = require('gulp');
  var changed    = require('gulp-changed');
  var concat     = require('gulp-concat');
  var cssmin     = require('gulp-minify-css');
  var gulpif     = require('gulp-if');
  var less       = require('gulp-less');
  var swig       = require('gulp-swig');
  var rename     = require('gulp-rename');
  var uglify     = require('gulp-uglify');
  var debug      = require('gulp-debug');

  // utilities
  var path       = require('path');
  var fs         = require('fs');
  var argv       = require('minimist')(process.argv.slice(2));

} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);
 
}

var globalJS = require('./develop/global-js.js'); 
var globalCSS = require('./develop/global-css.js');


// JAVASCRIPT TASKS

gulp.task('global-js', function() {
    return gulp.src(globalJS.main)
        .pipe(debug({verbose: true}))
        .pipe(concat('globals.js'))
        .pipe(gulp.dest('static/javascript'))
        .pipe(uglify())
        .pipe(gulp.dest('static/javascript'));
});

gulp.task('global-ie-js', function() {
    return gulp.src(globalJS.ie_fix)
        .pipe(debug({verbose: true}))
        .pipe(concat('globals-ie.js'))
        .pipe(gulp.dest('static/javascript'))
        .pipe(uglify())
        .pipe(gulp.dest('static/javascript'));
});

// CSS TASKS

gulp.task('global-css', function() {
    return gulp.src(globalCSS.main)
    .pipe(debug({verbose: true}))
    .pipe(concat('globals.css'))    
    .pipe(less({compatability: "*"}))
    .pipe(gulp.dest('static/css'))
    .pipe(cssmin())
    .pipe(gulp.dest('static/css'));
});

