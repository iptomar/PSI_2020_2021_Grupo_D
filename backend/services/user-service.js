const db = require("../configs/mongodb").getDB();
const bcrypt = require("bcrypt");

//Função que permite o registo do utlizador na tabela "users"
exports.register = (email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      bcrypt.hash(rawPassword, 10, (err, hash) => {
        if (err) {
          console.error(err)
          reject(err);
        } else {
          db.collection("users")
            .insertOne({ email, hash, aprovedStories: [] })
            .then(() => resolve())
            .catch((e) => reject(e));
        }
      });
    } catch (e) {
      console.error(e);
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
            bcrypt.compare(rawPassword, user.hash, (err, res) => {
              if (err) {
                console.error(err)
                reject(err)
              }
              if (res) {
                resolve({ _id: user._id })
              } else {
                reject(new Error("email or password incorrect"))
              }
            })
          } else reject(new Error("email or password incorrect"));
        })
        .catch((e) => reject(e));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

exports.addCheckedStory = (userUID, storyId) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .updateOne({ _id: userUID }, { $push: { aprovedStories: storyId } })
        .then((res) => resolve(res.result))
        .catch((e) => reject(e));
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};
