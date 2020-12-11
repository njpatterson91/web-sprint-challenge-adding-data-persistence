const Model = require("../project/model");
const validateId = (req, res, next) => {
  Model.getById(req.body.project_id).then((data) => {
    if (data !== undefined) {
      next();
    } else {
      res.status(400).json({ message: "resource not found" });
    }
  });
};

module.exports = validateId;
