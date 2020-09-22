const connection = require("../config/Database");

class PersonRepository {

    constructor() {
    }

    findByCpf(cpf) {
        return connection("persons").where("cpf", cpf).select().limit(1);
    }

    findFinancialAssetsByUserId(personId) {
        return connection("financial_assets").where("person_id", personId)
            .select("description", "value", "id");
    }

}

module.exports = PersonRepository;