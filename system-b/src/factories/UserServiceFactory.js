const UserService = require("../services/UserService")

const personRepositoryFactory = require("./PersonRepositoryFactory");


module.exports = () => {
    return new UserService(personRepositoryFactory());
}