const handlerException = require("common/middlewares/HandlerExceptionMiddleware");
const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const authEndpointFactory = require("../factories/AuthEndpointFactory");
const userEndpointFactory = require("./../factories/UserEndpointFactory");
const userEndpoint = userEndpointFactory();
const authEndpoint = authEndpointFactory();

module.exports = (app) => {

    app.post("/user/register", userEndpoint.register);
    app.post("/auth/login", authEndpoint.authenticate);


    // Handler exceptions api.
    app.use(handlerException);

    // Handler route not found.
    app.use(handlerRouteNotFound);
}