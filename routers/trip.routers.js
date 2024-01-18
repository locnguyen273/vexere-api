const express = require("express");
const {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
} = require("../controllers/trip.controllers");
const tripRouter = express.Router();

tripRouter.post("/", createTrip);
tripRouter.get("/", getAllTrip);
tripRouter.delete("/:id", deleteTrip);
tripRouter.put("/:id", updateTrip);

module.exports = {
  tripRouter,
};