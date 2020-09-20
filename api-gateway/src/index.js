const express = require("express");
const httpProxy = require("express-http-proxy");
// const t = require("common/exceptions/SecurityException")

const authServiceProxy = httpProxy("http://localhost:3000")
const app = express();

app.get("/auth", (request, response, next) => {
    return authServiceProxy(request, response, next);
});


app.listen(3001, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running");
});