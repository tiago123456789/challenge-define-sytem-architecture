const PersonActiviesRepository = require("../repository/PersonActiviesRepository")

module.exports = () => {
    return new PersonActiviesRepository();
}