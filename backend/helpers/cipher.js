const crypto = require("crypto");
const key = process.env.KEY;

exports.generateIv = () => {
  return crypto.randomBytes(8).toString("hex");
};

exports.encrypt = (data, iv) => {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  return cipher.update(data, "utf8", "base64") + cipher.final("base64");
};

exports.decrypt = (data, iv) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  return decipher.update(data, "base64", "utf8") + decipher.final("utf8");
};
