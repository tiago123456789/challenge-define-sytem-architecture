const uuid = require("uuid").v4;

module.exports = {

    getUuid() {
        return uuid(); 
    }
}