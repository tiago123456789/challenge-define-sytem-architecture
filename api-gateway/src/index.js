const express = require("express");
const app = express();
require("dotenv").config();

const httpProxy = require("express-http-proxy");


const authServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_AUTH)

app.post("/users/register", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

app.post("/auth/login", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

app.post("/auth/:hash/check", (request, response, next) => {
    return authServiceProxy(request, response, next);
});

app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Api gateway is running");
});