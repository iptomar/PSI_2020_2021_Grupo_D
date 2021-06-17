const router = require("express").Router();
const mapController = require("../controllers/map-controller.js");
const auth = require("../configs/auth")

//Associar routes da ligação ao controller de maps através de http get
router.get("/stories", mapController.getStories);

//Associar routes da ligação ao controller de maps através de http get
router.get("/stories-unchecked", auth(), mapController.getUncheckedStories);

//Associar routes da ligação ao controller de maps através de http Post
router.post("/story/create", mapController.createStory);

router.patch("/story/updateimg/:id", mapController.updateStoryImage);

router.put("/story-check/:id", auth(), mapController.checkStory);

//Associar routes da ligação ao controller de maps através de http delete
router.delete("/story/delete/:id", auth(), mapController.removeStory);

//Associação do router ao exports do module
module.exports = router;
