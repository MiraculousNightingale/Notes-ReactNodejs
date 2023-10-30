const http = require("http");
const { log } = require("console");

const port = process.env.PORT || 3000;
log(`Using PORT: ${port}`);

const app = require("./app");
const server = http.createServer(app);
log(`Server created.`);

server.listen(port);
log(`Server listening on PORT: ${port}`);

// Setup database
const sequelize = require("./database/database");
const Note = require("./models/note");
const Category = require("./models/category");
const dbConstants = require("./database/db_constants");

// Relations
Note.belongsToMany(Category, { through: dbConstants.junctionCategoryNote });
Category.belongsToMany(Note, { through: dbConstants.junctionCategoryNote });

sequelize.sync({ force: false });
