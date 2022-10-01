var express = require("express");
var router = express.Router();
require("../models/connection");
var articlesModel = require("../models/article");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Welcome my friend 🚀" });
});

router.get("/articles", function (req, res, next) {
  articlesModel.find().then((data) => res.json({ articles: data }));
});


router.get("/article", function (req, res, next) {
  articlesModel.find().then((data) => res.json({ articles: data }));
});

module.exports = router;
