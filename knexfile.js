module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/project.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  staging: {},

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/project.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {},
};
