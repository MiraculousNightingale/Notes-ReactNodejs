const { log, warn, error } = require("console");
const { Sequelize } = require("sequelize");
const ENV = process.env;

const sequelize = new Sequelize({
  dialect: ENV.DB_DIALECT,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  database: ENV.DB_NAME,
});

log("Testing database connection...");
sequelize
  .authenticate({})
  .then((_) => {
    log("Connection has been established successfully.");
  })
  .catch((error) => {
    error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
