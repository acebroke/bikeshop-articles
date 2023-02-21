const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  quantity: Number,
  stars: Number,
});

const articlesModel = mongoose.model("articles", articleSchema);

module.exports = articlesModel;
