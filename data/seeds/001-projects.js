exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "project1", description: "testing" },
        { id: 2, name: "project2", description: "testing" },
        { id: 3, name: "project3", description: "testing" },
      ]);
    });
};
