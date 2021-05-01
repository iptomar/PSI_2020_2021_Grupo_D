const db = require("../configs/mongodb").getDB();

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
