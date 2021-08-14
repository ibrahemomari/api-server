"use strict";

// requiers
const express = require("express");
const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const foodRoute = require("./routes/food.route");
const clothesRoute = require("./routes/clothes.route");

const app = express();

app.use(express.json());
app.use(logger);
app.use(foodRoute);
app.use(clothesRoute);

app.get("/", (req, res) => {
  res.send("the server is working");
});

app.post("/bad", (req, res) => {
  let number = 12;
  number.forEach((x) => console.log(x));
  res.send("this Bad Route ");
});

app.use("*", notFoundHandler);
app.use(errorHandler);

const start = (port) => {
  app.listen(port, () => {
    console.log(`The server start running at port ${port}`);
  });
};

module.exports = {
  app: app,
  start: start,
};
