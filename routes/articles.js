var express = require("express");
var router = express.Router();
require("../models/connection");
var articlesModel = require("../models/article");
/* GET home page. */

router.get("/:name", function (req, res, next) {
  var articlename = req.params?.name;
  if (articlename) {
    articlesModel
      .findOne({ name: { $regex: req.params?.name, $options: "i" } })
      .then((data) => {
        if (data) {
          res.json({ article: data });
        } else {
          res.json({ message: "Tu sais pas écrire ou quoi ? 🤣" });
        }
      });
  } else {
    res.json({ message: "Ta pas mis de nom à ton article 😡" });
  }
});

module.exports = router;
