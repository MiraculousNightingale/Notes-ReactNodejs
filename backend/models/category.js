const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Note = require("./note");
const dbConstants = require("../database/db_constants");

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
});

// Category.belongsToMany(Note, { through: dbConstants.junctionCategoryNote });

module.exports = Category;
