exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments();
      table.text("name").notNullable();
      table.text("description").notNullable();
      table.text("completed").notNullable();
    })
    .createTable("resources", (table) => {
      table.increments();
      table
        .bigInteger("resourceID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
      table.text("name");
      table.text("description");
    })
    .createTable("tasks", (table) => {
      table.increments();
      table
        .bigInteger("taskID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
      table.text("description");
      table.text("notes");
      table.text("completed");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
