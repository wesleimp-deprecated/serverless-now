const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.status(200).json({ its: "working" }));
app.get("/wr", (req, res) =>
  res.status(200).json({ its: "working", with: "route" })
);

module.exports = app;
