//Conecção e instância à base de dados
const db = require("../configs/mongodb").getDB();

//Função que permite o registo do utlizador na tabela "users"
exports.register = (email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .insertOne({ email, rawPassword })
        .then(() => resolve())
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e.message);
    }
  });
};

//Função que permite o login  do utlizador 
exports.login = (email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .findOne({ email: email })
        .then((found) => {
          if (found) {
            if (found.rawPassword === rawPassword)
              resolve();
            else reject(new Error("username and password don't match"));
          } else reject(new Error("user doesnt exist"));
        })
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e.message);
    }
  });
};
