// build your `/api/resources` router here
const express = require("express");
const router = express.Router();
const Model = require("./model");

router.get("/", (req, res) => {
  Model.getAll().then((data) => {
    const toSend = [];
    for (let i in data) {
      if (data[i]["completed"] === 0) {
        toSend.push({
          id: data[i].id,
          name: data[i].name,
          description: data[i].description,
          completed: false,
        });
      } else {
        toSend.push({
          id: data[i].id,
          name: data[i].name,
          description: data[i].description,
          completed: true,
        });
      }
    }
    res.status(200).json(toSend);
  });
});

router.post("/", (req, res) => {
  Model.create(req.body)
    // .then((data) => {
    //   return Model.getById(data);
    // })
    // .then((data) => {
    //   res.status(200).json(data);
    // });
    .then((data) => {
      return Model.getById(data);
    })
    .then((data) => {
      if (data["completed"] === 0) {
        res.status(200).json({
          id: data.id,
          name: data.name,
          description: data.description,
          completed: false,
        });
      } else {
        res.status(200).json({
          id: data.id,
          name: data.name,
          description: data.description,
          completed: true,
        });
      }
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

module.exports = router;
