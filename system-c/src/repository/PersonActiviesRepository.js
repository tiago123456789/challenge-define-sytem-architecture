const model = require("../collections/PersonActivies");

class PersonActiviesRepository {

    constructor() {
        this._model = model;
    }

    findByCpf(cpf) {
        return this._model.find({ cpf: cpf });
    }
}

module.exports = PersonActiviesRepository;