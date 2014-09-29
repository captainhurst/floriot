var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var swig = require('swig');
var morgan = require('morgan');
var settings = require('./settings.js');
var mongoose = require('mongoose');
var app = express();

//Debugger

// require('express-debug')(app, {/* settings */});


// Static Files
app.use(express.static(__dirname + '/static'));
app.use('/static', express.static(__dirname + '/static'));

// View engine setup
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(favicon(__dirname + '/static/favicon.ico'));
app.use(require('less-middleware')(path.join(__dirname, 'static')));
// app.use(express.static(path.join(__dirname, 'static')));

//Database

mongoose.connect('mongodb://localhost/'+settings.config.database.name);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to Database: " + settings.config.database.name);
});


// Applications

var urls = require('./urls.js');
app.use('/', urls);


//  catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



// error handlers
// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.send('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log( settings.cli.serverMessage +server.address().port);
});

