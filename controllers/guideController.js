const Guide = require("../model/guide");

const guideController = {
  // ADD GUIDE
  addGuide: async (req, res) => {
    try {
      const newGuide = new Guide(req.body);
      const savedGuide = await newGuide.save();
      res.status(200).json(savedGuide);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET ALL GUIDES
  getAllGuides: async (req, res) => {
    try {
      const guides = await Guide.find();
      res.status(200).json(guides);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = guideController;
