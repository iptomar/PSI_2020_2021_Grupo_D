const db = require("../configs/mongodb").getDB();
const ObjectId = require("mongodb").ObjectID;

exports.getStories = () => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories")
        .find()
        .toArray()
        .then((stories) => resolve(stories))
        .catch((err) => reject(err));
    } catch (e) {
      reject(e);
    }
  });
};

exports.getUncheckedStories = () => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .find()
        .toArray()
        .then((stories) => resolve(stories))
        .catch((err) => reject(err));
    } catch (e) {
      reject(e);
    }
  });
};

exports.createStory = (lat, lng, desc) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .insertOne({ lat, lng, desc })
        .then(() => resolve("story added"))
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e);
    }
  });
};

exports.checkStory = (uid) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .findOne({ _id: ObjectId(uid) })
        .then((story) => {
          if(!story)
            reject(new Error("no story"))
          this.removeStory(story._id);
          db.collection("stories")
            .insertOne(story)
            .then(() => resolve("story checked"))
            .catch((e) => reject(e.message));
        })
        .catch((err) => reject(err));
    } catch (e) {
      reject(e);
    }
  });
};

exports.removeStory = (uid) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .findOneAndDelete({ _id: ObjectId(uid) })
        .then((story) => resolve(story))
        .catch((err) => reject(err));
    } catch (e) {
      reject(e);
    }
  });
};
