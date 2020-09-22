const connection = require("../config/Database");

class UserRepository {

    constructor() {
    }

    findByCpf(cpf) {
        return connection("users").where("cpf", cpf).select().limit(1);
    }

    findDebtsByUserId(userId) {
        return connection("debts").where("user_id", userId).select("description", "users", "id");
    }

}

module.exports = UserRepository;