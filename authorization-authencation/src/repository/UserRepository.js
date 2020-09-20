const connection = require("./../config/Database");

class UserRepository {

    constructor() {
        this._connection = connection("users");
    }

    insert(register) {
        return this._connection.insert(register);
    }

    findByEmail(email) {
        return this._connection.select().where("email", email).limit(1);
    }

    update(id, datasModified) {
        return this._connection.where("id", id).update(datasModified);
    }
}

module.exports = UserRepository;