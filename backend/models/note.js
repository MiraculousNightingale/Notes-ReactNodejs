const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Category = require("./category");
const dbConstants = require("../database/db_constants");

const Note = sequelize.define("note", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  text: DataTypes.TEXT,
});

// Note.belongsToMany(Category, { through: dbConstants.junctionCategoryNote });

module.exports = Note;
