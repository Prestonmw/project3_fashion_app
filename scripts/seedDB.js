// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the Pins collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/Pins"
// );

// const pinsSeed = [
//     {
//       ID: "",
//       image_URL: "test",
//       category: "test",
//       title: "title"
//     },
// ];

// db.Pins
//   .remove({})
//   .then(() => db.Pincollection.collection.insertMany(pinsSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });