var express = require('express');
var router = express.Router();

var db = require('../models');
var burger = db.burger;

// Get all burgers
router.get("/", function(req, res) {
  burger.findAll({}).then(function(result) {
    res.render("index", {burgers: result});
  });
});

// Insert new burger
router.post("/", function(req, res) {
  burger.create({
    burger_name: req.body.name
  }).then(function(result) {
    res.redirect("/");
  }).catch(function(error) {
  });   
});

// Modify burger devoured status
router.put("/:id", function(req, res) {
  burger.update({
    devoured: req.body.eat
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Delete devoured burgers
router.delete("/", function(req, res) {
  burger.destroy({
    where: {
      devoured: true
    }
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;