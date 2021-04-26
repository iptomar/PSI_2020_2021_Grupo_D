const MongoClient = require("mongodb").MongoClient;

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
