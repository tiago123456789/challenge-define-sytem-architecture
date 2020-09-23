const handlerException = require("common/middlewares/HandlerExceptionMiddleware");
const authMiddleware = require("common/middlewares/AuthMiddleware");
const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const personActivitiesEndpoint = require("../factories/PersonActivitiesEndpointFactory")();

module.exports = (app) => {


    app.get("/person-activities/cpf/:cpf", authMiddleware.hasPermission, personActivitiesEndpoint.findByCpf);

    // Handler exceptions api.
    app.use(handlerException);

    // Handler route not found.
    app.use(handlerRouteNotFound);
}