const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pinSchema = new Schema({
  image_URL: { type: String, required: true },
  category: { type: String, required: true },
  title: {type: String, required: true }
});

const Pins = mongoose.model("Pins", pinSchema);

module.exports = Pins;
