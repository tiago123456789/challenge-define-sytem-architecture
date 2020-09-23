const PersonActivitiesEndpoint = require("../endpoints/PersonActivitiesEndpoint");
const personActivitiesService = require("./PersonActivitiesServiceFactory")();
const cache = require("common/cache/Cache");

module.exports = () => {
    return new PersonActivitiesEndpoint(personActivitiesService, cache);
}