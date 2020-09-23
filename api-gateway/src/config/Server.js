const express = require("express");
const app = express();
require("dotenv").config();
const routesApp = require("../routes")

routesApp(app);

module.exports = app;  