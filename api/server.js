// build your server here
const express = require("express");
const server = express();
const resourceRouter = require("./resource/router");
const projectRouter = require("./project/router");

server.use(express.json());

server.use("/api/resources", resourceRouter);
server.use("/api/projects", projectRouter);

server.get("/", (_, res) => {
  res.status(200).json({ message: "API Live" });
});

module.exports = server;
