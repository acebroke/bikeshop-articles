const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  name: String,
  price: Number,
  url: String,
  quantity: Number,
});

const articlesModel = mongoose.model("articles", articleSchema);

module.exports = articlesModel;
