const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send(
    req.body
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
