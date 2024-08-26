// console.log("Starting express with nodemon");

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var productsRouter = require('./routes/products');
// var authorsRouter = require('./routes/authors');

// const mongoose = require("mongoose");
// const authors = require('./models/authors');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/products', productsRouter);
// app.use('/authors',authorsRouter);

// let mongoConnUrl = "mongodb://localhost/ascendion";
// mongoose.connect(mongoConnUrl);
// let db = mongoose.connection;
// db.on("connected", function(){
//   console.log("connected to mongoose Database named Ascendion");
// });
// db.on("error", function(){
//   console.log("Error came in connecting");
// });


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;



// console.log("starting express with nodemon");

// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var productRouter = require('./routes/products');
// var authorsRouter = require('./routes/authors');
// var todosRouter = require('./routes/todos'); // Import todos routes

// const mongoose = require("mongoose");

// const { log, error } = require('console');

// // Initialize Mongoose models
// require('./models/todo');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/products', productRouter);
// app.use('/authors', authorsRouter);


// app.use('/todos', todosRouter); // Use todos routes

// let mongoConnUrl = "mongodb://localhost/ascendion";
// mongoose.connect(mongoConnUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// let db = mongoose.connection;
// db.on("error", function(){
//     console.log("error came in connecting");
// });

// db.on("connected", function(){
//   console.log("connected to mongoose database named ascendion");
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;


console.log("starting express with nodemon");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
var authorsRouter = require('./routes/authors');
var todosRouter = require('./routes/todos'); 
var carUsersRouter = require('./routes/carusers'); 

const mongoose = require("mongoose");

var app = express();

require('./models/todo');
require('./models/carusers'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/authors', authorsRouter);
app.use('/todos', todosRouter); // Use todos routes
app.use('/carusers', carUsersRouter); // Use carusers routes

let mongoConnUrl = "mongodb://localhost/ascendion";
mongoose.connect(mongoConnUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", function() {
    console.log("Error connecting to MongoDB");
});

db.on("connected", function() {
    console.log("Connected to MongoDB database named ascendion");
});

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
