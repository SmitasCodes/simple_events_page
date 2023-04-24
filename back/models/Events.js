const mongoose = require("mongoose");

const Events = mongoose.model(
  "Events",
  new mongoose.Schema({
    name: {
      type: String,
      trim: true.valueOf,
      required: [true, "Please add a name"],
    },
    description: {
      type: String,
      trim: true.valueOf,
      required: [true, "Please add a description"],
    },
    image: {
      type: String,
      trim: true.valueOf,
      required: [true, "Please add a image url"],
    },
    price: {
      type: Number,
      required: [true, "Please add a price"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  })
);

module.exports = Events;
