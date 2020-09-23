const handlerRouteNotFound = require("common/middlewares/HandlerRouteNotFound");
const handlerException = require("common/middlewares/HandlerExceptionMiddleware");
const authMiddleware = require("common/middlewares/AuthMiddleware");
const cache = require("common/cache/Cache");
const httpProxy = require("express-http-proxy");

const authServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_AUTH);
const systemAServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_SYSTEM_A);
const systemBServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_SYSTEM_B);
const systemCServiceProxy = httpProxy(process.env.ADDRESS_APPLICATION_SYSTEM_C);

module.exports = (app) => {

    app.get("/scores/users/cpf/:cpf", authMiddleware.hasPermission, (request, response, next) => {
        return systemBServiceProxy(request, response, next);
    });

    app.get("/person-activities/cpf/:cpf", authMiddleware.hasPermission, async (request, response, next) => {
        const cpf = request.params.cpf;
        const personActivitiesInCache = await cache.smembers(`person_activities_${cpf}`);
        const isNotNull = personActivitiesInCache.length > 0;
        if (isNotNull) {
            return response.json(personActivitiesInCache);
        } else {
            return systemCServiceProxy(request, response, next);
        }
    });

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

    app.get("/auth/check", (request, response, next) => {
        return authServiceProxy(request, response, next);
    });

    // Handler exceptions api.
    app.use(handlerException);

    // Handler route not found.
    app.use(handlerRouteNotFound);

}