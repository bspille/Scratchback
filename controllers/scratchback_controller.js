var express = require("express");

var router = express.Router();
var user = require("../models/users");

// get route -> index
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/feed", function(req, res) {
  user.findAll(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { users: data };
    res.render("");

  });
});

// post route -> back to index
router.post("/newuser", function(req, res) {
  user.create(, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/profile/update", function(req, res) {
  user.update(req.body.user_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
