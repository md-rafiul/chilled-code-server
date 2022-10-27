const express = require("express");
var cors = require("cors");
const app = express();
const port = process.env.Port || 5000;

const courseData = require("./resources/courseDetails.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Assignment 10 server is running!!!");
});

app.get("/courses", (req, res) => {
  res.send(courseData);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseData.find((course) => course.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
