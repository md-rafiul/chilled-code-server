const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.Port || 5000;

const courseData = require("./resources/resources.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(courseData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
