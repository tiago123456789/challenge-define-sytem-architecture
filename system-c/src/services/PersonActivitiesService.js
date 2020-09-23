const NotFoundException = require("common/exceptions/NotFoundException");

class PersonActivitiesService {

    constructor(personActivitiesRepository) {
        this._personActivitiesRepository = personActivitiesRepository;
    }

    async findByCpf(cpf) {
        let personActivities = await this._personActivitiesRepository.findByCpf(cpf);
        const isNull = personActivities.length == 0;
        if (isNull) {
            throw new NotFoundException("Não foi encontrado informações para cpf informado.")
        }

        personActivities = personActivities[0];
        return personActivities;
    }
}

module.exports = PersonActivitiesService;