const tourController = require("../controllers/tourController");

const router = require("express").Router();

//ADD TOUR
router.post("/", tourController.addTour);

router.get("/", tourController.getAllTours);
module.exports = router;
