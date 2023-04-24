import axios from "axios";
const API_URL = "/api/events";

// get transactions

const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//post transactions

const postEvents = async (event) => {
  try {
    const response = await axios.post(API_URL, event);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const eventsServices = {
  getEvents,
  postEvents,
};

export default eventsServices;
