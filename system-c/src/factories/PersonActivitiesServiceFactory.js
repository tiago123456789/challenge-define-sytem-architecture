const PersonActivitiesService = require("../services/PersonActivitiesService")
const personActivitiesFactory = require("./PersonActivitiesRepositoryFactory")();

module.exports = () => {
    return new PersonActivitiesService(personActivitiesFactory);
}