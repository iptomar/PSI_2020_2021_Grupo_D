const router = require("express").Router();
const mapController = require("../controllers/map-controller.js");

router.get("/stories", mapController.getStories);
router.get("/stories-unchecked", mapController.getUncheckedStories);

router.post("/story/create", mapController.createStory);

router.put("/story-check/:id", mapController.checkStory);

router.delete("/story/delete/:id", mapController.removeStory);

module.exports = router;
