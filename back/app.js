const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());

const { setEvents, getEvents } = require("./controllers/EventsController.js");

app.post("/api/events", setEvents);
app.get("/api/events", getEvents);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
