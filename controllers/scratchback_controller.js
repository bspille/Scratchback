var models = require("../models");

var passport = require('./auth.js');
// var passport = require('passport'), 
//     LocalStrategy = require('passport-local').Strategy;
    

// get route -> index
module.exports = function (router) 
{
    // Default root routes to main
    router.get("/", function (req, res) 
    {

        res.render("./layouts/main");

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

/*////////////////////////////////
app.post('/authLogin/', function(req, res, next) {
        passport.authenticate('local-login', 
         function(err, user, info) {
            if (err) { return next(err); }
            var errors = {};
            var loginMsg = req.flash('loginMessage');
            if (loginMsg.length !== 0 || (!user)) {
                errors.loginMsg = loginMsg;
                return res.json({
                    errors: errors
                });
            }
            console.log('test-authLogin-local-login', err, user, info);
            req.logIn(user, {failureFlash: true}, function(err) {
                if (err) { return next(err); }
                return res.redirect('/users/' + user.username);
            });
        })(req, res, next);
    });
////////////////////////////////*/

// router.post('/login/', 
//     function(req, res, next) 
//     {
//         passport.authenticate('local', 
//             function(err, user, info) 
//             {
//                 if (err) { return next(err); }
//                 var errors = {};
//                 /*
//                 var loginMsg = req.flash('loginMessage');
                
//                 if (loginMsg.length !== 0 || (!user)) 
//                 {
//                     errors.loginMsg = loginMsg;
//                      return res.json({  errors: errors });
//                  }
//                  */

//             console.log('test-authLogin-local-login', err, user, info);
//             req.logIn(user, {failureFlash: true}, function(err) {
//                 if (err) { return next(err); }
//                 return res.redirect('/users/' + user.username);
//             });
//         })(req, res, next);
//     });


    // router.post('/login',
    //         function( req, res, next )
    //         {
    //             passport.authenticate('local', 
    //             {
    //                 successRedirect: '/', 
    //                 failureRedirect: 'login',
    //                 failureFlash: true
    //             });
    //         })(req, res, next);

    router.post('/login',
        passport.authenticate('local', { 
            successRedirect: '/',
            failureRedirect: '/users/login',
            failureFlash: true 
        }),
        function (req, res) {
            res.redirect('/');
        });

            // ,
            // function (req, res) 
            // {
            //     console.log("In my router post");
            //     res.redirect('/');
            // }
            //);

    // router.get("/feed", function(req, res) {
    //   user.findAll(function(data) {
    //     // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    //     var hbsObject = { users: data };
    //     res.render("");

    //   });
    // });

    // post route -> back to index
    // router.post("/newuser", function(req, res) {
    //   user.create(, function(result) {
    //     // wrapper for orm.js that using MySQL insert callback will return a log to console,
    //     // render back to index with handle
    //     console.log(result);
    //     res.redirect("/");
    //   });
    // });

    // put route -> back to index
    // router.put("/profile/update", function(req, res) {
    //   user.update(req.body.user_id, function(result) {
    //     // wrapper for orm.js that using MySQL update callback will return a log to console,
    //     // render back to index with handle
    //     console.log(result);
    //     res.redirect("/");
    //   });
    // });

    // router.get('/login', )

}

// module.exports = router;


/*
 user.getUserByUsername(username, function(err, user)
                {
                    if(err)
                    {
                        console.log("Error occurred.")
                        throw err;
                    }
                    if(!user)
                    {
                    return done(null, false, {message: 'Unknown User'});
                }
                console.log("User found "+ user.username);
                return done(null, user);
        });
        user.comparePassword(password, user.password, function(err, isMatch)
            {
                    if(err) throw err;
                    if(isMatch){
                        return done(null, user);
                } else 
                {
                    return done(null, false, {message: 'Invalid password'});
                }
        });
*/