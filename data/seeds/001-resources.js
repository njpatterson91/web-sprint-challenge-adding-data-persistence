exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "resource1", resourceID: 1, description: "testing" },
        { id: 2, name: "resource2", resourceID: 1, description: "testing" },
        { id: 3, name: "resource3", resourceID: 1, description: "testing" },
      ]);
    });
};
