const mongoose = require("mongoose");

//  CREATE SCHEMA

const MerchSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  ClothingType: { type: String, required: true },
  Price: { type: Number, required: true },
  Description: { type: String },
  img: { type: String },
  Sizes: { type: Array },
});

// CREATE MODEL

const Merch = mongoose.model("Merch", MerchSchema);

module.exports = Merch;
