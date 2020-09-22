const express = require("express");
const httpProxy = require("express-http-proxy");
const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const handlerException = require("common/middlewares/HandlerExceptionMiddleware");
const authMiddleware = require("common/middlewares/AuthMiddleware");
const app = express();

require("dotenv").config();

const authServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_AUTH);
const systemAServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_SYSTEM_A);

app.get("/users/cpf/:cpf", authMiddleware.hasPermission, (request, response, next) => {
    return systemAServiceProxy(request, response, next);
});

app.post("/users/register", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

app.post("/auth/login", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

app.post("/auth/:hash/check", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

// Handler exceptions api.
app.use(handlerException);

// Handler route not found.
app.use(handlerRouteNotFound);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Api gateway is running");
});