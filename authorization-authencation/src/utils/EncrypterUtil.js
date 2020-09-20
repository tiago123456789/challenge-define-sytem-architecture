const bcrypt = require("bcryptjs");

module.exports = {

    getHash(value) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(value, 10, function(err, hash) {
                if (err) {
                    reject(err);
                    return;
                }
                return resolve(hash);
            });
        });
    },

    compare(value, hash) {
        return bcrypt.compare(value, hash);
    }
}