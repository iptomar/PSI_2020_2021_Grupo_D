const userService = require("../services/user-service.js");

exports.register = (req, res) => {
  userService
    .register(req.body.username, req.body.email, req.body.password)
    .then(() => res.status(200).json({ success: true }))
    .catch((message) => res.status(500).send(message));
};

exports.login = (req, res) => {
  userService
    .login(req.body.username, req.body.password)
    .then((data) => res.send(data))
    .catch((error) => res.status(500).send(error.message));
};
