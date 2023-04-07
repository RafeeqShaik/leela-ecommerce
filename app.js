const express = require("express");
const server = require("./startup/server");
const middleware = require("./startup/middleware");
const routes = require("./startup/routes");

require("./startup/mongoose");

const app = express();
middleware(app);

routes(app);

server(app);
