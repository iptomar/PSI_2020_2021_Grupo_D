const router = require("express").Router();
const userController = require("../controllers/user-controller");

//Associar routes da ligação ao controller de user através de http post
router.post("/register", userController.register);

//Associar routes da ligação ao controller de user através de http post
router.post("/login", userController.login);

module.exports = router;
