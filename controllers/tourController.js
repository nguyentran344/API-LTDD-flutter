const Tour = require("../model/tour");

const tourController = {
  //ADD TOUR
  addTour: async (req, res) => {
    try {
      const newTour = new Tour(req.body);
      const savedTour = await newTour.save();
      res.status(200).json(savedTour);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL TOURS
  getAllTours: async (req, res) => {
    try {
      const tours = await Tour.find();
      res.status(200).json(tours);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET A TOUR
  getATour: async (req, res) => {
    try {
      const tour = await Tour.findById(req.params.id);
      res.status(200).json(tour);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //UPDATE A TOUR
  updateATour: async (req, res) => {
    try {
      const tour = await Tour.findById(req.params.id);
      await tour.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE TOUR
  deleteATour: async (req, res) => {
    try {
      await Tour.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = tourController;
