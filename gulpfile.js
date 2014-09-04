try {
  // Gulp plugins
  var gulp            = require('gulp');
  var changed         = require('gulp-changed');
  var concat          = require('gulp-concat');
  var cssmin          = require('gulp-minify-css');
  var gulpif          = require('gulp-if');
  var less            = require('gulp-less');
  var swig            = require('gulp-swig');
  var rename          = require('gulp-rename');
  var uglify          = require('gulp-uglify');
  var debug           = require('gulp-debug');
  var jshint          = require('gulp-jshint');
  var jshintStylish   = require('jshint-stylish');
  var connect         = require('gulp-connect');
  var nodemon         = require('gulp-nodemon');

  // utilities
  var path       = require('path');
  var fs         = require('fs');
  var argv       = require('minimist')(process.argv.slice(2));

  // SETTINGS
  var settings   = require('./settings.js');
} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);
 
}

// var globalJS = require('./develop/global-js.js'); 
// var globalCSS = require('./develop/global-css.js');


// LINT PATH
// var nodeLintPaths = [
//   './admin/*.js',
//   './applications/*.js',
//   './develop/js/*.js',
// ];

// var uxLintPaths   = [
//   './static/javascript/*js'
// ];

// JAVASCRIPT TASKS


gulp.task('lint', function() {
  return gulp.src(settings.features)
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('global-js', function() {
    return gulp.src(settings.config.buildUx.js.globals)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish))
        .pipe(debug({verbose: true}))
        .pipe(concat('globals.js'))
        .pipe(gulp.dest('static/javascript'))
        .pipe(uglify())
        .pipe(gulp.dest('static/javascript'));
});

gulp.task('global-ie-js', function() {
    return gulp.src(settings.config.buildUx.js.ie)
        .pipe(debug({verbose: true}))
        .pipe(concat('globals-ie.js'))
        .pipe(gulp.dest('static/javascript'))
        .pipe(uglify())
        .pipe(gulp.dest('static/javascript'));
});

// CSS TASKS

gulp.task('global-css', function() {
    return gulp.src(settings.config.buildUx.css.globals)
    .pipe(debug({verbose: true}))
    .pipe(concat('globals.css'))    
    .pipe(less({compatability: "*"}))
    .pipe(gulp.dest('static/css'))
    .pipe(cssmin())
    .pipe(gulp.dest('static/css'));
});

gulp.task('global-ie-css', function() {
    return gulp.src(settings.config.buildUx.css.globals)
    .pipe(debug({verbose: true}))
    .pipe(concat('globals.css'))    
    .pipe(less({compatability: "*"}))
    .pipe(gulp.dest('static/css'))
    .pipe(cssmin())
    .pipe(gulp.dest('static/css'));
});


//SERVER TASKS

var devServer = { 
  script: 'app.js', 
  env: { 'NODE_ENV': 'development' } , 
  ignore: ['./build/**'], 
  nodeArgs: ['--debug'] 
}

gulp.task('connect', function() {
  connect.server();
});

gulp.task('go', function () {
  nodemon({ 
    script: 'app.js', 
    ext: 'html js less css json', 
    ignore: ['ignored.js'] 
    })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

// WATCH TASKS

gulp.task('epsilon', function(){
  nodemon({ 
    script: 'app.js', 
    ext: 'html js less css json', 
    ignore: ['./build/**'], 
    nodeArgs: ['--debug=9999'] 
    })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('************------------------ Server Restarted! ------------------************')
    });
  gulp.watch(settings.features, ['lint']);
});
