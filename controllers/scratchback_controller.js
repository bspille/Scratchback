var express = require("express"),
    router = express.Router(),
    Users = require("../models/users.js");
module.exports = function(router){
    router.get("/", function(req, res){
      res.render("index")
    });
// router.post("/faker", function(req, res) {
//   // can also use this array elsewhere to populate forms
//   var jobCategories = ["Accounting/Finance", "Automotive", "Carpentry", "General Labor",
//   "Construction", "Plumbing", "HVAC", "Consultation", "Landscaping/Gardening", "Graphic Design",
//   "Photography", "Culinary Services", "Computer Programming", "Academic Tutoring"];
//   var dollarSigns = ["$", "$$", "$$$", "$$$$", "$$$$$"];
//   var faker = require('faker');
//
//   for (var i = 0; i <= 100; i++) {
//     var randomName = faker.name.findName();
//     var randomUsername = faker.internet.userName();
//     var randomPassword = faker.internet.password();
//     var randomEmail = faker.internet.email();
//     var randomJob = jobCategories[Math.floor(Math.random() * jobCategories.length)];
//     var randomSpecialization = faker.name.jobType();
//     var randomLooking = jobCategories[Math.floor(Math.random() * jobCategories.length)];
//     var randomJobCost = dollarSigns[Math.floor(Math.random() * dollarSigns.length)];
//     var randomZipCode = faker.address.zipCode();
//     var randomAvatar = faker.internet.avatar();
//
//     db.Users.create({
//       fullName: randomName,
//       userName: randomUsername,
//       password: randomPassword,
//       email: randomEmail,
//       jobskill: randomJob,
//       specialization: randomSpecialization,
//       lookingFor: randomLooking,
//       jobCost: randomJobCost,
//       zip: randomZipCode,
//       avatar: randomAvatar
//     });
//
//   }
//
// });
} // end of router
