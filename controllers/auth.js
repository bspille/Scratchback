// var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
// var User = require( '../models/users.js');
// var models = require("../models");

// var user = require("../models");
// var db = require('../models');
var bCrypt = require('bcrypt-nodejs');

module.exports = function( passport , models )
{
    //LOCAL SIGN UP!!!
    passport.use('local-signup', new LocalStrategy(

    {           
      usernameField : 'userName',
      passwordField : 'password',
      passReqToCallback : true 
    },

    function(req, userName, password, done){
       console.log("YOU ARE IN FUNCTION OF SIGNUP");

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

       models.Users.find({where: {userName:userName}}).then(function(user){

      if(user)
      {
        return done(null, false, {message : 'That email is already taken'} );
      }

      else
      {
        var userPassword = generateHash(password);
        var data =
        { userName:userName,
        password:userPassword,
        fullName: req.body.fullName,
        email: req.body.email,
        jobskill: req.body.jobSkill,
        specialization: req.body.specialization,
        jobCost: req.body.jobCost,
        zip: req.body.zip,
        avatar: req.body.avatar
        };


        models.Users.create(data).then(function(newUser,created){
          if(!newUser){
            return done(null,false);
          }

          if(newUser){
            return done(null,newUser);
            
          }


        });
      }


    }); 



  }



  ));// END OF LOCAL SIGNUP

    //Sign-In LOCAL
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
    console.log("IN YOUR SERIALIZE");
    console.log(user.id);
  done(null, user.id);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


}; // end module








// module.exports = passport;