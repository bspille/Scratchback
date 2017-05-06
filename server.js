var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport'), 
  LocalStrategy = require('passport-local').Strategy;

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));



require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

var db = require('./models');

// app.listen(process.env.PORT || 3000, function()
// {
//     console.log("Listening on PORT: " + PORT);
// });

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
