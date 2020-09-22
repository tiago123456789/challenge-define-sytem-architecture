const UserEndpoint = require("../endpoints/UserEndpoint")

const userServiceFactory = require("./UserServiceFactory");

module.exports = () => {
    return new UserEndpoint(userServiceFactory());
}