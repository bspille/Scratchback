var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

//var user = require("../models");

var models = require("../models");

passport.use(new LocalStrategy
        ( { passReqToCallback:true },
          function ( req,username, password, done ) 
          {
              req.flash = function( m, s){ console.log( m + ":"+s); }
              console.log( "Making findOne call..." );
                models.Users.find( { 'username' : username} ).
                then (  function( user )
                        {
                        
                            if( !user )
                            {
                                console.log("User not found with name" + username);
                                return done(null, false, {'message':"user not found."});
                            }
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

// passport.use('login',new LocalStrategy({
//     passReqToCallback : true
// },
//   function(username, password, done) {

//     User.findOne({ 'username': username, 'password': password }, function (err, user) {
//       done(err, user);
//     });
//   }
// ));


// passport.serializeUser(function (user, done) {
//     // done(null, models.Users.id);
//     done(null, user);
// });

// passport.deserializeUser(function (id, done) {
//     Users.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;