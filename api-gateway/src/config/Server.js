const express = require("express");
const helmet = require("helmet");
const app = express();
require("dotenv").config();
const routesApp = require("../routes");
const rateLimitMiddleware = require("common/middlewares/RateLimitMiddleware");

// Enable helmet.
app.use(helmet()); 

// Enable rate limit middleware.
app.use(rateLimitMiddleware); 

routesApp(app);

module.exports = app;   