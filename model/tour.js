const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  cityName: {
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
  startDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  like: {
    type: Number,
    default: 0,
  },
  countryName: {
    type: String,
    required: true,
  },
});

let Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;
