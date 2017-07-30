var express = require('express');
var router = express.Router();

var db = require('../models');
var burger = db.burger;
var customer = db.customer;

// Get all burgers
router.get("/", function(req, res) {
  burger.findAll({include: [customer]}).then(function(result) {
    res.render("index", {burgers: result});
  });
});

// Insert new burger
router.post("/", function(req, res) {
  customer.create({
    customer_name: req.body.customer_name
  }).then(function(cust_result) {
    burger.create({
      burger_name: req.body.burger_name,
      customerId: cust_result.dataValues.id
    }).then(function(burg_result) {
      res.redirect("/");
    });
  });
});

// Modify burger devoured status
router.put("/:id", function(req, res) {
  burger.update({
    devoured: true
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