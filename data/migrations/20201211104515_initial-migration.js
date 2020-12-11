exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id");
      table.text("name").notNullable().unique();
      table.text("description");
      table.boolean("completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments();
      // table
      //   .bigInteger("resourceID")
      //   .unsigned()
      //   .index()
      //   .references("id")
      //   .inTable("projects")
      //   .onDelete("RESTRICT")
      //   .onUpdate("RESTRICT");
      table.text("name").unique();
      table.text("description");
    })
    .createTable("tasks", (table) => {
      table.increments();
      table
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").defaultTo(false);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resourcesAndProjects");
};
