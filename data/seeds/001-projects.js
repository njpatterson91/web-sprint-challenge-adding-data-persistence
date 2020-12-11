exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "project1",
          project_description: "testing",
          completed: "false",
        },
        {
          id: 2,
          project_name: "project2",
          project_description: "testing",
          completed: "false",
        },
        {
          id: 3,
          project_name: "project3",
          project_description: "testing",
          completed: "false",
        },
      ]);
    });
};
