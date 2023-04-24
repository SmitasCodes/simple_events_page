const Events = require("../models/Events");
const asyncHandler = require("express-async-handler");

// @desc Set events
// @router POST /api/events
// @access PUBLIC

const setEvents = asyncHandler(async (req, res) => {
  const { name, description, image, price } = req.body;

  if (!name || !description || !image || !price) {
    res.status(404);
    throw new Error("Please add a field");
  }

  const event = await Events.create({
    name: name,
    description: description,
    image: image,
    price: price
  });

  res.status(200).json(event);
});

// @desc Get events
// @router POST /api/events
// @access PUBLIC

const getEvents = asyncHandler(async (req, res) => {
  const events = await Events.find();
  
  res.status(200).json(events);
});

module.exports = {
  setEvents,
  getEvents,
};

