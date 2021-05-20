const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");

const options = process.env.MONGO_CERT
  ? {
      ssl: true,
      sslValidate: true,
      sslCA: [Buffer.from(process.env.MONGO_CERT, "base64")],
      useUnifiedTopology: true,
    }
  : { useUnifiedTopology: true };

const client = new MongoClient(process.env.MONGO_URI, options);

exports.connectDB = () => {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

exports.getDB = () => client.db("maindb");

exports.disconnectDB = () => _client.close();

const mimeTypes = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/bmp": ".bmp",
  "image/webp": ".webp",
};

exports.uploadFile = (uidObj, filePath, mimeType) => {
  return new Promise((resolve, reject) => {
    if (mimeTypes[mimeType]) {
      let bitmap = fs.readFileSync(filePath);
      let imgb64 = Buffer.from(bitmap).toString('base64');
      let pre = "data:" + mimeType + ";base64, "
      client
        .db("maindb")
        .collection("stories-unchecked")
        .updateOne({ _id: uidObj }, { $set: { image: pre + imgb64 } })
        .then((res) => resolve(res.result))
        .catch((err) => reject(err));
    } else {
      reject("unsupported mime-type");
    }
  });
};
