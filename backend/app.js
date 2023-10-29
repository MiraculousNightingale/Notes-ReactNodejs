require("dotenv").config();
const ENV = process.env;

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: ENV.DB_DIALECT,
  username: ENV.DB_USERNAME,
  password: ENV.DB_PASSWORD,
  host: ENV.DB_HOST,
  port: ENV.DB_PORT,
  database: ENV.DB_NAME,
});

sequelize
  .authenticate({})
  .then((_) => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const noteRoutes = require("./api/routes/notes");

// Logging
app.use(morgan("dev"));

// Body parsers
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Prevent CORS errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Route handling
app.use("/notes", noteRoutes);

// Handle unhandled requests
app.use((req, res, next) => {
  const error = new Error("Request handle not found.");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
