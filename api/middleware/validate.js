const validate = (req, res, next) => {
  const data = req.body;
  const vin = Object.prototype.hasOwnProperty.call(data, "description");
  const make = Object.prototype.hasOwnProperty.call(data, "project_id");
  if (vin === true && make === true) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "Data is not structured in a usable way for the API" });
  }
};

module.exports = validate;
