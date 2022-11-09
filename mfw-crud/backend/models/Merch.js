const { Decimal128 } = require("bson");
const mongoose = require("mongoose");

//  CREATE SCHEMA

const MerchSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  ClothingType: { type: String, required: true },
  Price: { type: Decimal128, required: true },
  Description: { type: String },
  img: { type: String, required: true },
  Sizes: { type: Array, required: true },
});

// CREATE MODEL

const Merch = mongoose.model("Merch", MerchSchema);

module.exports = Merch;
