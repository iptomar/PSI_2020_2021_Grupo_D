
//Inclusão do modulo express com o método Router() para instância do mesmo
const router = require("express").Router();

//Inclusão e instância do user controller
const userController = require("../controllers/user-controller");

//Associar routes da ligação ao controller de user através de http post
router.post("/register", userController.register);

//Associar routes da ligação ao controller de user através de http post
router.post("/login", userController.login);

//Associação do router ao exports do module
module.exports = router;
