// var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
// var User = require( '../models/users.js');
// var models = require("../models");

// var user = require("../models");

module.exports = function( passport , models)
{
    passport.use('local',new LocalStrategy
        ( { passReqToCallback:true },
          function ( req,username, password, done ) 
          {
              // req.flash = function( m, s){ console.log( m + ":"+s); }
              console.log( "User name = " + username + " Password = " + password );
              models.Users.find( { 'username' : username} ).
              then (  function( user )
                        {
                        
                            if( !user )
                            {
                                console.log("User not found with name" + username);
                                return done(null, false, {'message':"user not found."});
                            }
                            console.log("user: " + user.username + " "+ "pass: " + user.password)
                            if( user.password !== password )
                            {

                                console.log("Password failed.." + username);

                                return done(null, false, {'message':"user not found."})
                            }
                            console.log("Returning user");
                            return done( null, user);
                        },
                        function( err )
                        {
                            if( err )
                            {
                                console.log(err);
                            }
                        }
                )
               
    

          }
    )
);
////////////// end passport.use
passport.serializeUser(function(user, done) 
{
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


}; // end module








// module.exports = passport;