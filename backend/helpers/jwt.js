const jwt = require("jsonwebtoken");
const key = process.env.JWT_KEY;

exports.createToken = (payload) => {
  return new Promise((resolve, reject) => {
    const options = { expiresIn: "100h", issuer: "hollyLeaver" };
    jwt.sign(payload, key, options, (error, token) => {
      if (error) reject(error);
      else resolve({ token });
    });
  });
};

exports.validateToken = (token) => {
  return new Promise((resolve, reject) => {
    let options = { issuer: "hollyLeaver" };
    jwt.verify(token, key, options, (error, payload) => {
      if (error) reject(error);
      else resolve(payload);
    });
  });
};
