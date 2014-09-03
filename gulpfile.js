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
var globalCSS = require('./develop/global-js.js');


// gulp.task('global-js', function () {
//     gulp.src(globalJS.main, {base: './bower_components/'}) // path to your files
//     .pipe(concat('globals.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('./static/javascript/'));
// });

gulp.task('global-js', function() {
    return gulp.src(globalJS.main)
        .pipe(concat('globals.js'))
        .pipe(gulp.dest('static'))
        .pipe(rename('globals.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static'));
});

// var paths = {
//   admin_less  : ['./develop/admin-static/sb-admin-2/**/*.less'],
//   less        : ['./develop/css/**/*.less'],
//   images      : ['./develop/img/**/*.jpg', './src/minsites/img/**/*.png'],
//   admin_build : path.join('./static/admin-static/',assetSrcPath),  
//   build       : path.join('./static/',assetSrcPath),
//   assets      : path.join(rootAssetPath,assetSrcPath)
// };