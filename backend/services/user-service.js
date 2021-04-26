const db = require("../configs/mongodb").getDB();

exports.register = (username, email, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .insertOne({ username, email, rawPassword })
        .then(() => resolve("user added"))
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e.message);
    }
  });
};

exports.login = (username, rawPassword) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("users")
        .findOne({ username })
        .then((found) => {
          if (found) {
            if (found.rawPassword === rawPassword)
              resolve(`${username} with password ${rawPassword} logged in`);
            else reject(new Error("username and password don't match"));
          } else reject(new Error("user doesnt exist"));
        })
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e.message);
    }
  });
};
