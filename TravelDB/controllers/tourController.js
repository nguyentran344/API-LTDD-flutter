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
};

module.exports = tourController;
