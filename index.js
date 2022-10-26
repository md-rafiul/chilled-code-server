const express = require("express");
const app = express();
const port = process.env.Port || 5000;

const courseData = require("./resources/resources.json");

app.get("/", (req, res) => {
  res.send(courseData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
