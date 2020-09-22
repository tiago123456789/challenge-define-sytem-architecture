const UserEndpoint = require("../endpoints/UserEndpoint")
const cache = require("common/cache/Cache");

const userServiceFactory = require("./UserServiceFactory");

module.exports = () => {
    return new UserEndpoint(userServiceFactory(), cache);
}