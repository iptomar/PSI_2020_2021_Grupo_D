const db = require("../configs/mongodb").getDB();

exports.getPoints = () => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("points")
        .find()
        .toArray()
        .then((memes) => resolve(memes))
        .catch((err) => reject(err));
    } catch (e) {
      reject(e.message);
    }
  });
};

exports.createPoint = (lat, lng, desc) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("points")
        //TODO: Parse this to double
        .insertOne({ lat, lng, desc })
        .then(() => resolve("point added"))
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e.message);
    }
  });
};
