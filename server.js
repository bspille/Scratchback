var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
// Passport instantiation
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

 var router = express.Router();

 var cookieParser = require('cookie-parser'),
      expressValidator = require('express-validator'),
      flash = require('connect-flash-plus'),
      session = require('express-session');


var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());



app.use(express.static('public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/scratchback_controller.js");
// app.use("/", routes);



// require('./routes/api-routes.js')(app);
// require('./routes/html-routes.js')(app);
// require('./controllers/scratchback_controller.js')(app);


var db = require('./models');
// var seed = require('./databaseSeeding.js');

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

require('./controllers/scratchback_controller.js')(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

