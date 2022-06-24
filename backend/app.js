const { readFileSync } = require("fs");
const express = require("express");

const app = express();

const data = JSON.parse(readFileSync("./news.json", "utf8"));

app.get("/", (req, res) => {
  if (data) {
    console.log("received request for data ...");
    res.status(200).json(data);
  } else {
    res.status(500).send("Error");
  }
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (data.length > id) {
    const item = data[id];
    res.status(200).json(item);
  } else {
    res.status(404).send("Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
