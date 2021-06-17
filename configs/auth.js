const jwt = require("../helpers/jwt");

module.exports = () => {
  return (req, res, next) => {
    if (req.headers.authorization) {
      jwt
        .validateToken(req.headers.authorization)
        .then((payload) => {
          req.client = payload._id;
          next();
        })
        .catch((e) => res.status(401).send(e.message))
    } else return res.status(401).send("Authorization header undefined")
  };
};
