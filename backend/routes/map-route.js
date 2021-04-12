const router = require("express").Router();
const mapController = require("../controllers/map-controller.js");

router.get("/points", mapController.getPoints);
router.post("/point", mapController.createPoint);

module.exports = router;
