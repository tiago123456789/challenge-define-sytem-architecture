const express = require("express");
const helmet = require("helmet");
const app = express();
require("./LoadEnvironmentVariable");
const routesApp = require("./../routes/index");

// Enable helmet.
app.use(helmet());

// Enable middleware make parse datas to json.
app.use(express.json());

// Enable routes application.
routesApp(app);

module.exports = app;