const AuthEndpoint = require("../endpoints/AuthEndpoint");

const userServiceFactory = require("./UserServiceFactory");

module.exports = () => {
    return new AuthEndpoint(userServiceFactory());
}