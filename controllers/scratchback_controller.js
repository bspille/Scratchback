// var models = require("../models");

//var passport = require('./auth.js');

//var express = require('express');
// var app = express();
// var router = express.Router();



// get route -> index
module.exports = function( router ,passport )
{

    // Default root routes to main
    router.get("/", function (req, res)
    {

        res.render("index");

    });

    // Register page
    router.get('/register', function (req, res)
    {
        res.render('newuser');
    });

    // Login Page
    router.get('/login', function (req, res)
    {
        res.render('index');
    });

    // POST ROUTE FOR LOGIN AUTHENTICATION
    router.post('/login/', 
    function(req, res, next) 
    {
        // console.log("PERFORMING POST " + JSON.stringify(req) );

        passport.authenticate('local', 
            function(err, user, info) 
            {
                if (err) { return next(err); }
                var errors = {};
                /*
                var loginMsg = req.flash('loginMessage');
                
                if (loginMsg.length !== 0 || (!user)) 
                {
                    errors.loginMsg = loginMsg;
                     return res.json({  errors: errors });
                 }
                 */
            if( user )
            {
                console.log( "USER IS DEFINED.");
            }else
            {
                console.log("USER NOT DEFINED.");
            }
            console.log('test-authLogin-local-login', err, user, info);
            req.logIn(user, {failureFlash: true}, function(err) {
                if (err) { return next(err); }
                return res.redirect('/users/' + user.username);
            });
        })(req, res, next);
    });

    //  router.post('/login',
    //     passport.authenticate('local', { 
    //         successRedirect: '/',
    //         failureRedirect: '/users/login',
    //         failureFlash: true 
    //     }),
    //     function (req, res) {
    //         res.redirect('/');
    //     });

     

    //  router.post("/faker", function(req, res) {
    //    // can also use this array elsewhere to populate forms
    //    var jobCategories = ["Accounting/Finance", "Automotive", "Carpentry", "General Labor",
    //    "Construction", "Plumbing", "HVAC", "Consultation", "Landscaping/Gardening", "Graphic Design",
    //    "Photography", "Culinary Services", "Computer Programming", "Academic Tutoring"];
    //    var dollarSigns = ["$", "$$", "$$$", "$$$$", "$$$$$"];
    //    var faker = require('faker');

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

    //   }

    // });
}
// module.exports = router;
