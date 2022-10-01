var express = require("express");
var router = express.Router();
require("../models/connection");
var articlesModel  = require('../models/article');
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res, next) {

  articlesModel
  .find()
  .then(data => res.json({articles : data}))
});

module.exports = router;
