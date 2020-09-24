const express = require("express");
const helmet = require("helmet");
const app = express();
require("dotenv").config();
const routesApp = require("../routes");

// Enable helmet.
app.use(helmet());


routesApp(app);

module.exports = app;  