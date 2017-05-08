// express server dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var db = require(path.dirname('/models')); // cannot find models // added path.dirname
var exphbs = require("express-handlebars");
var routes = require("./controllers/scratchback_controller.js");

// Passport instantiation
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

 var router = express.Router();// I don't think this is need here??

 var cookieParser = require('cookie-parser'),
      expressValidator = require('express-validator'),
      flash = require('connect-flash-plus'),
      session = require('express-session');

// data seed file
// var seed = require('./databaseSeeding.js');// use to seed using the seed file

// server variables
var app = express();
var PORT = process.env.PORT || 3000;

// setup server parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());

// serves public files
app.use(express.static('public'));

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// sets up the router
app.use("/", routes);

// Express Session
app.use(session(
{
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// // Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validation
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// sync to database and start server listener
db.sequelize.sync({ force: true }).then(function() {
  seed();
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
