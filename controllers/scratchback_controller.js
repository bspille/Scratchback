// var db = require('../models');


// get route -> index
module.exports = function( app ,passport,db )
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
        res.render('profile');
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
                return res.render('profile', {user: user});
            });
        })(req, res, next);
    });

    // looking for
    app.put("/search/:id?/:lookingFor?", function(req, res){

        console.log("YOU ARE IN THIS PUT METHOD");
      var query = [req.params.id, req.params.lookingFor];
      var idQuery = req.params.id;

      var lookingForQuery = req.params.lookingFor;
      
      

      db.Users.findAll({
        where: 
        {
            // id: idQuery,
            lookingFor: lookingForQuery
        }
        
      }).then (function(user)
      {
          var userObject = [];
        //   console.log(user[0].dataValues);
          for (i = 0; i<user.length; i++){
            userObject.push(user[i].dataValues);
          };

        console.log(userObject);
        res.json(userObject);
      })
      
    //   res.json(query);
// =======
//       res.json([{
//           fullName: "Aashish",
//           userName: "ap1992",
//           password: 1212,
//           email: "randomEmail",
//           jobskill: "randomJob",
//           specialization: "randomSpecialization",
//           lookingFor: "randomLooking",
//           jobCost: "$$$",
//           thumbsUp: "1",
//           zip: "00000",
//           avatar: "http://bulma.io/images/placeholders/128x128.png"
//         },
//         {
//             fullName: "ben",
//             userName: "bs1984",
//             password: 3333,
//             email: "randomEmail",
//             jobskill: "randomJob",
//             specialization: "randomSpecialization",
//             lookingFor: "randomLooking",
//             jobCost: "$$$",
//             thumbsUp: "1",
//             zip: "00000",
//             avatar: "http://bulma.io/images/placeholders/128x128.png"
//           }]);
// >>>>>>> 5660936940c72b7488aaadd0577f812d80b8decf
    });
}
