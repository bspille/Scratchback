// express server dependancies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var db = require("./models");
var exphbs = require("express-handlebars");
var passport = require('passport');
var cookieParser = require('cookie-parser'),
      expressValidator = require('express-validator'),
      flash = require('connect-flash-plus'),
      session = require('express-session');
var faker = require('faker');

var jobCategories = ["Finance", "Automotive", "Carpentry", "General Labor",
"Construction", "Plumbing", "HVAC", "Consultation", "Landscaping", "Graphic Design",
"Photography", "Culinary Services", "Computer Programming", "Academic Tutoring"];

var dollarSigns = ["$", "$$", "$$$", "$$$$", "$$$$$"];


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

require('./controllers/auth.js')(passport,db);
require('./controllers/scratchback_controller.js')(app, passport,db);

// sync to database and start server listener
db.sequelize.sync({ force: true }).then(function() {

  // create known user to work with
    db.Users.create({
        fullName: "Aashish",
        userName: "ap1992",
        password: 1212,
        email: faker.internet.email(),
        jobskill: jobCategories[Math.floor(Math.random() * jobCategories.length)],
        specialization: faker.name.jobType(),
        lookingFor: "HVAC",
        jobCost: dollarSigns[Math.floor(Math.random() * dollarSigns.length)],
        thumbsUp: "1",
        zip: faker.address.zipCode(),
        avatar: "https://avatars0.githubusercontent.com/u/22531830?v=3&s=400"
      },{
          fullName: "BenS",
          userName: "bs1984",
          password: 3333,
          email: faker.internet.email(),
          jobskill: jobCategories[Math.floor(Math.random() * jobCategories.length)],
          specialization: faker.name.jobType(),
          lookingFor: "HVAC",
          jobCost: dollarSigns[Math.floor(Math.random() * dollarSigns.length)],
          thumbsUp: "1",
          zip: faker.address.zipCode(),
          avatar: "https://avatars1.githubusercontent.com/u/22961721?v=3&s=400"
        },{
            fullName: "ChrisC",
            userName: "cc1993",
            password: 3232,
            email: faker.internet.email(),
            jobskill: jobCategories[Math.floor(Math.random() * jobCategories.length)],
            specialization: faker.name.jobType(),
            lookingFor: "HVAC",
            jobCost: dollarSigns[Math.floor(Math.random() * dollarSigns.length)],
            thumbsUp: "1",
            zip: faker.address.zipCode(),
            avatar: "https://avatars0.githubusercontent.com/u/15125965?v=3&s=460"
          });

    // call the faker function to seed the database
    require("./databaseSeeding.js")();

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
