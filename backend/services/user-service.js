const db = require("../configs/mongodb").getDB();
const cipher = require("../helpers/cipher");

//Função que permite o registo do utlizador na tabela "users"
exports.register = (email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      let tokeniv = cipher.generateIv();
      let password = cipher.encrypt(rawPassword, tokeniv);
      db.collection("users")
        .insertOne({ email, password, tokeniv, aprovedStories: [] })
        .then(() => resolve())
        .catch((e) => reject(e));
    } catch (e) {
      console.error(e)
      reject(e);
    }
  });
};

// Função que permite autenticar o utlizador
exports.authenticate = (email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .findOne({ email: email })
        .then((user) => {
          if (user) {
            if (cipher.decrypt(user.password, user.tokeniv) == rawPassword)
              resolve({ _id: user._id });
            else reject(new Error("username and password don't match"));
          } else reject(new Error("user doesnt exist"));
        })
        .catch((e) => reject(e));
    } catch (e) {
      console.error(e)
      reject(e);
    }
  });
};
