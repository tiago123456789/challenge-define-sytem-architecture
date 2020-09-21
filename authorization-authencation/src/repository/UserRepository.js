const connection = require("./../config/Database");

class UserRepository {

    constructor() {
    }

    insert(register) {
        return connection("users").insert(register);
    }

    findByEmail(email) {
        return connection("users").where("email", email).select().limit(1);
    }

    findByHash(hash) {
        return connection("users").where("hash_step_2_authentication", hash).select();
    }

    update(id, datasModified) {
        return connection("users").where("id", id).update(datasModified); 
    }
}

module.exports = UserRepository;