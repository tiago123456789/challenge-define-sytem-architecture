const UserRepository = require("../repository/UserRepository");

module.exports = () => {
    return new UserRepository();
}