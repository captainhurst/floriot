try {
  // Gulp plugins
  var gulp            = require('gulp');
  var changed         = require('gulp-changed');
  var concat          = require('gulp-concat');
  var clean           = require('gulp-clean');
  var cssmin          = require('gulp-minify-css');
  var htmlmin         = require('gulp-minify-html');
  var htmlpretty      = require('gulp-html-prettify');
  var gulpif          = require('gulp-if');
  var less            = require('gulp-less');
  var include         = require('gulp-file-include');
  var rename          = require('gulp-rename');
  var uglify          = require('gulp-uglify');
  var debug           = require('gulp-debug');
  var jshint          = require('gulp-jshint');
  var jshintStylish   = require('jshint-stylish');
  var connect         = require('gulp-connect');
  var nodemon         = require('gulp-nodemon');
  var data            = require('gulp-data');

  // utilities
  var path       = require('path');
  var fs         = require('fs');
  var argv       = require('minimist')(process.argv.slice(2));

  // SETTINGS
  var settings   = require('./settings.js');
  var dev        = {};
} catch (e) {

  console.log(e.toString());
  console.log('Please run `npm install`\n');
  process.exit(1);
 
}

//UTIL FUNCTIONS



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


//TEMPLATE TASKS

gulp.task('make-templates-min', function(){
  return gulp.src(settings.config.templates.toCompile)
  .pipe(debug({verbose: true}))
  .pipe(include({
      prefix: '@@',
    }))
  .pipe(htmlmin({
    comments: true,
    spare: true,
    conditionals: true,
    quotes: true
  }))
  .pipe(gulp.dest('templates'));
});

gulp.task('make-templates-dev', function(){
  return gulp.src(settings.config.templates.toCompile)
  .pipe(debug({verbose: true}))
  .pipe(include({
      prefix: '@@',
    }))
  .pipe(htmlpretty({indent_char: ' ', indent_size: 4}))
  .pipe(gulp.dest('views'));
});

//SERVER TASKS

dev.server = function(){
  nodemon({ 
      script: 'app.js', 
      ext: 'html js less css json', 
      ignore: ['./static/*'], 
      nodeArgs: ['--debug=9999'] 
      })
      .on('restart', function () {
        console.log(settings.cli.restartMessage);
    });
} 

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
  gulp.watch(settings.features, ['lint']);
  gulp.watch(settings.config.buildUx.css.globals, ['global-css']);
  gulp.watch(settings.config.buildUx.js.globals, ['global-js']);
  gulp.watch(settings.config.buildUx.js.ieFix, ['global-ie-js']);
  gulp.watch(settings.config.templates.toWatch, ['make-templates-dev']);
  dev.server();
});
