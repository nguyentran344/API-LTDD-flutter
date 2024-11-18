const guideController = require("../controllers/guideController");

const router = require("express").Router();

// ADD GUIDE
router.post("/", guideController.addGuide);

router.get("/", guideController.getAllGuides);

module.exports = router;
