const handlerException = require("common/middlewares/HandlerExceptionMiddleware");
const authMiddleware = require("common/middlewares/AuthMiddleware");
const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const userEndpointFactory = require("./../factories/UserEndpointFactory");
const userEndpoint = userEndpointFactory();

module.exports = (app) => {

    app.get("/scores/users/cpf/:cpf", authMiddleware.hasPermission, userEndpoint.findByCpf);

    // Handler exceptions api.
    app.use(handlerException);

    // Handler route not found.
    app.use(handlerRouteNotFound);
}