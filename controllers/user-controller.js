const userService = require("../services/user-service.js");
const jwt = require("../helpers/jwt")

//Função de controller que permite registo de um utilizador
exports.register = (req, res) => {
  userService
    .register(req.body.email, req.body.password)
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => res.status(500).send(e.message));
};

//Função de controller que permite login do utilizador
exports.login = (req, res) => {
  userService
    .authenticate(req.body.email, req.body.password)
    .then((payload) => jwt.createToken(payload))
    .then((data) => res.status(200).json(data))
    .catch((e) => res.status(500).send(e.message));
};
