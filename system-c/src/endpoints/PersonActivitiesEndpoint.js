
class PersonActivitiesEndpoint {

    constructor(service, cache) {
        this._service = service;
        this._cache = cache;
        this.findByCpf = this.findByCpf.bind(this);
    }

    async findByCpf(request, response, next) {
        try {
            const cpf = request.params.cpf;
            const cacheKey = `person_activities_${cpf}`;
            const personActivitiesInCache = await this._cache.smembers(cacheKey);
            const isNotNull = personActivitiesInCache.length > 0;
            if (isNotNull) {
                return response.json(personActivitiesInCache);
            }

            const personActivities = await this._service.findByCpf(cpf);  
            await this._cache.sadd(cacheKey, [ personActivities ], 900);
            response.json(personActivities);      
        } catch(error) {
            next(error);
        }
    }
}

module.exports = PersonActivitiesEndpoint;