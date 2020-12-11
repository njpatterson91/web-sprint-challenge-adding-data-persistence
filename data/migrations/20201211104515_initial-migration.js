exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments();
      table.text("name").notNullable().unique();
      table.text("description");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments();
      table
        .bigInteger("resourceID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
      table.text("name").unique();
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
    })
    .createTable("resourcesAndProjects", (table) => {
      table.increments();
      table
        .bigInteger("resourceID")
        .unsigned()
        .index()
        .references("id")
        .inTable("resources");
      table
        .bigInteger("projectID")
        .unsigned()
        .index()
        .references("id")
        .inTable("projects");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks");
};
