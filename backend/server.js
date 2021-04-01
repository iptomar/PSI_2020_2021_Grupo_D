require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const db = require("./configs/mongodb.js");

Promise.resolve(db.connectDB())
  .then(() => {
    const authRoute = require("./routes/user-route");
    const mapRoute = require("./routes/map-route")

    const port = 3001;

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.use("/api/user", authRoute);
    app.use("/api/map", mapRoute);

    app.listen(port, () => {
      console.log(
        `\x1b[34mSanta listening at http://localhost:${port}...\x1b[0m`
      );
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });
