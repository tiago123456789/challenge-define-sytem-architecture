const PersonRepository = require("../repository/PersonRepository");

module.exports = () => {
    return new PersonRepository();
}