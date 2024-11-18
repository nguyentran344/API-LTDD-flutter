const tourController = require("../controllers/tourController");

const router = require("express").Router();

//ADD TOUR
router.post("/", tourController.addTour);

//GET ALL TOUR
router.get("/", tourController.getAllTours);

//GET A TOUR
router.get("/:id", (req, res, next) => {
  tourController.getATour(req, res, next);
});

//UPDATE A TOUR
router.put("/:id", (req, res, next) => {
  tourController.updateATour(req, res, next);
});

//DELETE A TOUR
router.delete("/:id", (req, res, next) => {
  tourController.deleteATour(req, res, next);
});
module.exports = router;
