// build your server here
const express = require("express");
const server = express();
// const carsRouter = require("./cars/cars-router");
// const morgan = require("morgan");
// const cors = require("cors");

server.use(express.json());

//server.use("/api/cars", carsRouter);

server.get("/", (_, res) => {
  res.status(200).json({ message: "API Live" });
});

module.exports = server;
