const mongoose = require("mongoose");

const MensbigSchema = new mongoose.Schema({
  image_URL: String,
  category: String,
  title: String
});

module.exports = mongoose.model("Mensbig", MensbigSchema);