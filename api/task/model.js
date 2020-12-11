// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("tasks as t")
      .join("projects as p", "t.project_id", "p.id")
      .select(
        "t.*",
        "p.name as project_name",
        "p.description as project_description"
      );
  },
  getById(id) {
    return db("tasks").where("id", id).first();
  },
  create(data) {
    return db("tasks").insert(data);
  },
};
