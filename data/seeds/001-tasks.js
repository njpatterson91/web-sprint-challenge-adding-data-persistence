exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          taskID: 2,
          description: "task1",
          notes: "testing",
          completed: "false",
        },
        {
          id: 2,
          taskID: 2,
          description: "task2",
          notes: "testing",
          completed: "false",
        },
        {
          id: 3,
          taskID: 2,
          description: "task3",
          notes: "testing",
          completed: "false",
        },
      ]);
    });
};
