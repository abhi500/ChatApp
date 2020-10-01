var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser')

//db connect
require('./utils/db-connection');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var userRouter = require('./routes/users');
var chatRouter = require('./routes/chats');

var app = express();

app.use(cors()) 
app.use(logger('dev'));
app.use(bodyParser.text({type: 'text/plain'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/', userRouter);
app.use('/api/v1/', chatRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    status: false,
    message: res.locals.message,
    errors: {}
    // message: 'Route not found'
  })
  // res.render('error');
});

module.exports = app;
