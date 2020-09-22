const express = require("express");
const httpProxy = require("express-http-proxy");
const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const app = express();

require("dotenv").config();

const authServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_AUTH);
const systemAServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_SYSTEM_A);

app.get("/users/cpf/:cpf", (request, response, next) => {
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

// Handler route not found.
app.use(handlerRouteNotFound);

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Api gateway is running");
});