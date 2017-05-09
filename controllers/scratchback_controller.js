
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

    // login to the profile
    router.get('/profile/', function (req, res)
    {
        res.render('profile');
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

}
