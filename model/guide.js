const mongoose = require("mongoose");

const guideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  language: {
    type: [String],
    required: true,
  },
  actractions: {
    type: [String],
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
});

let Guide = mongoose.model("Guide", guideSchema);
module.exports = Guide;
