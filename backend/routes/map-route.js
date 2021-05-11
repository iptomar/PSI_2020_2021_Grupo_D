//Inclusão do modulo express com o método Router() para instância do mesmo
const router = require("express").Router();

//Inclusão e instância do serviço map-controller.js
const mapController = require("../controllers/map-controller.js");

//Associar routes da ligação ao controller de maps através de http get
router.get("/stories", mapController.getStories);

//Associar routes da ligação ao controller de maps através de http get
router.get("/stories-unchecked", mapController.getUncheckedStories);

//Associar routes da ligação ao controller de maps através de http Post
router.post("/story/create", mapController.createStory);

//Associar routes da ligação ao controller de maps através de http put
router.put("/story-check/:id", mapController.checkStory);

//Associar routes da ligação ao controller de maps através de http delete
router.delete("/story/delete/:id", mapController.removeStory);

//Associação do router ao exports do module
module.exports = router;
