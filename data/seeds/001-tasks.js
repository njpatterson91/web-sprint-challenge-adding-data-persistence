exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          project_id: 2,
          description: "task1",
          notes: "testing",
        },
        {
          id: 2,
          project_id: 2,
          description: "task2",
          notes: "testing",
        },
        {
          id: 3,
          project_id: 2,
          description: "task3",
          notes: "testing",
        },
      ]);
    });
};
