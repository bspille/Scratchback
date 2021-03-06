
// get route -> index
module.exports = function( app ,passport,db )
{

    // Default root routes to main
    app.get("/", function (req, res)
    {

        res.render("index");

    });

    // Register page

    app.get('/signup', function (req, res)
    {
        console.log("You were in here");
        res.render('index');
    });

    // POST ROUTE FOR SIGNUP
    app.post('/signup/',
    function(req, res, next)
    {
        // console.log("PERFORMING POST " + JSON.stringify(req) );

        passport.authenticate('local-signup',
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
    //   db.Users.update({lookingFor: lookingForQuery}, {where: {id: idQuery}})
    //   .then(function(update){
    //     // console.log(update);
    //     res.json(update);
    //   });


      db.Users.findAll({
        where:
        {
            // id: idQuery,
            jobSkill: lookingForQuery
        }

      }).then (function(user)
      {
          var userObject = [];
        //   console.log(user[0].dataValues);
          for (i = 0; i<user.length; i++){
            userObject.push(user[i].dataValues);
          };

        // console.log(userObject);
        res.json(userObject);
      })
    });

    // thumbs up incrementer
    app.put("/thumbsup/:id/:thumbsUp", function(req, res){
      // res.json([req.params.thumbsUp, req.params.id]);
      var thumbsUp = req.params.thumbsUp;
      var id = req.params.id;
      db.Users.update({thumbsUp: thumbsUp},{where:{id: id}})
      .then(function(update){
        // console.log(update);
        // res.json(update);
      })
    });

    // new user signuo
    app.post("/newuser", function(req, res){
      console.log(req.body);
      var user = req.body;
      db.Users.find({userName: req.body.userName}).then (function (user, err){
          if(user)
          {
            console.log("User Already exists!");
          }else{
            db.Users.create(
                {
                    fullName: req.body.fullName,
                    userName: req.body.userName,
                    password: req.body.password,
                    email: req.body.email,
                    jobskill: req.body.jobSkill,
                    specialization: req.body.specialization,
                    jobCost: req.body.jobCost,
                    zip: req.body.zip,
                    avatar: req.body.avatar
                });
          }

      });


      res.render('profile', {user: user});
    });

}// end of module.exports
