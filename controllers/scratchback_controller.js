var db = require("../models");

// var passport = require('./auth.js');

var express = require('express');
// var app = express();
var router = express.Router();



// get route -> index


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

    // login to the profile
    router.get('/profile/', function (req, res)
    {
        res.render('profile');
    });

    // POST ROUTE FOR LOGIN AUTHENTICATION
    router.post('/login/',
    function(req, res, next)
    {
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

                console.log('test-authLogin-local-login', err, user, info);
                req.logIn(user, {failureFlash: true}, function(err) {
                    if (err) { return next(err); }

                    // return res.redirect('hello' + user.username);
                    return res.render('hello',{user:user});



                });
            })(req, res, next);
     });

module.exports = router;
