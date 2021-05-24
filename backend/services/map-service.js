const mongo = require("../configs/mongodb");
const db = mongo.getDB();

const ObjectId = require("mongodb").ObjectID;

// Query à base de dados que obtêm a coleção de "Stories"
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
// Query à base de dados que obtêm a coleção de "stories-unchecked"
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

// Query à base de dados de inserção  que permite criar uma "story"
exports.createStory = (name, email, story, marker) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .insertOne({ name, email, story, lat: marker[0], lng: marker[1] })
        .then((r) => resolve(r.insertedId))
        .catch((e) => reject(e.message));
    } catch (e) {
      reject(e);
    }
  });
};

// Aceita a historia submetida pelo o utilizador e passa a ser possivel observa-la no mapa
exports.checkStory = (uid) => {
  return new Promise((resolve, reject) => {
    try {
      db.collection("stories-unchecked")
        .findOne({ _id: ObjectId(uid) })
        .then((story) => {
          if (!story) reject(new Error("no story"));
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

//Query à base de dados  que permite remover uma "story"
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

// Atualiza a imagem da historia
// TODO mete isto um array em vez de ser apoeas uma historia
exports.updateStoryImage = (uid, file) => {
  return new Promise((resolve, reject) => {
    try {
      mongo.uploadFile(ObjectId(uid), file.path, file.type)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    } catch (e) {
      reject(e)
    }
  })
}
