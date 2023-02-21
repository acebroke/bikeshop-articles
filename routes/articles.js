var express = require("express");
var router = express.Router();
require("../models/connection");
var articlesModel = require("../models/article");
/* GET home page. */

const bikes = [
  {
    name: "BIK045",
    price: 679,
    stars: 1,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623804/bike-1_bedgib.jpg",
  },
  {
    name: "TITANS",
    price: 799,
    stars: 3,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623804/bike-3_rvakqk.jpg",
  },
  {
    name: "CEWO",
    price: 1300,
    stars: 5,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623804/bike-4_bctue0.jpg",
  },
  {
    name: "AMIG039",
    price: 479,
    stars: 3,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623804/bike-5_dnjbyu.jpg",
  },
  {
    name: "ZOOK07",
    price: 999,
    stars: 4,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623804/bike-2_m6af04.jpg",
  },
  {
    name: "LIK099",
    price: 869,
    stars: 5,
    image:
      "https://res.cloudinary.com/teammates/image/upload/v1664623805/bike-6_ytqa0z.jpg",
  },
];
// add all bikes to the database

router.get("/add", function (req, res, next) {
  bikes.forEach((bike) => {
    var newBike = new articlesModel(bike);
    newBike.save();
  });
  res.json({ message: "Bikes added to the database" });
});

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
