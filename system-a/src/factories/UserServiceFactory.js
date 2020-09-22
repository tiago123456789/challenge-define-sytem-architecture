const UserService = require("../services/UserService")

const userRepositoryFactory = require("./UserRepositoryFactory");


module.exports = () => {
    return new UserService(userRepositoryFactory());
}