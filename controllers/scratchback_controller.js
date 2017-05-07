var express = require("express"),
    router = express.Router(),
    Users = require("../models/users.js");

module.exports = function(router){
  router.get("/", function(reg, res){
    res.render("index");
  }
}// end of router
