const mongoose = require("mongoose");

const personActivities = mongoose.Schema({
    cpf: String,
    lastSearchByCpf: Date,
    movementationsFinancial: [Object],
    lastActiviesCredCard: [Object] 
});

const personActivitiesModel = mongoose.model("person_activies", personActivities);

module.exports = personActivitiesModel;