const http = require("http");
const app = require("./app");
const { log } = require("console");

const port = process.env.PORT || 3000;
log(`Using PORT: ${port}`);

const server = http.createServer(app);
log(`Server created.`);

server.listen(port);
log(`Server listening on PORT: ${port}`);
