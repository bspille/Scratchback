// get route -> index
module.exports = function( app ,passport )
{

    // Default root routes to main
    app.get("/", function (req, res)
    {

        res.render("index");

    });

    // Register page
    app.get('/register', function (req, res)
    {
        res.render('newuser');
    });

    // Login Page
    app.get('/login', function (req, res)
    {
        res.render('index');
    });

    // POST ROUTE FOR LOGIN AUTHENTICATION
    app.post('/login/', 
    function(req, res, next) 
    {
        // console.log("PERFORMING POST " + JSON.stringify(req) );

        passport.authenticate('local', 
            function(err, user, info) 
            {
                if (err) { return next(err); }
                var errors = {};
                
                
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