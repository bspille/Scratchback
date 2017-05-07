var express = require("express");

var router = express.Router();
var user = require("../models/users");

// get route -> index
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/feed", function(req, res) {
  user.findAll(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { users: data };
    res.render("");

  });
});

// post route -> back to index
router.post("/newuser", function(req, res) {
  user.create(, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

router.post("/faker", function(req, res) {
  // can also use this array elsewhere to populate forms
  var jobCategories = ["Accounting/Finance", "Automotive", "Carpentry", "General Labor",
  "Construction", "Plumbing", "HVAC", "Consultation", "Landscaping/Gardening", "Graphic Design",
  "Photography", "Culinary Services", "Computer Programming", "Academic Tutoring"];
  var dollarSigns = ["$", "$$", "$$$", "$$$$", "$$$$$"];
  var faker = require('faker');

  for (var i = 0; i <= 100; i++) {
    var randomName = faker.name.findName();
    var randomUsername = faker.internet.userName();
    var randomPassword = faker.internet.password();
    var randomEmail = faker.internet.email();
    var randomJob = jobCategories[Math.floor(Math.random() * jobCategories.length)];
    var randomSpecialization = faker.name.jobType();
    var randomLooking = jobCategories[Math.floor(Math.random() * jobCategories.length)];
    var randomJobCost = dollarSigns[Math.floor(Math.random() * dollarSigns.length)];
    var randomZipCode = faker.address.zipCode();
    var randomAvatar = faker.internet.avatar();

    db.Users.create({
      fullName: randomName,
      userName: randomUsername,
      password: randomPassword,
      email: randomEmail,
      jobskill: randomJob,
      specialization: randomSpecialization,
      lookingFor: randomLooking,
      jobCost: randomJobCost,
      zip: randomZipCode,
      avatar: randomAvatar
    });

  }
  
});

// put route -> back to index
router.put("/profile/update", function(req, res) {
  user.update(req.body.user_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
