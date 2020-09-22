const InvalidDatasException = require("common/exceptions/InvalidDatasException");

class Endpoint {

    isValidDatas(values) {
        const errors = this.getRulesValidation()
            .validate(values, { abortEarly: false, allowUnknown: true });

        if (errors.error) {
            const validationErrors = {};
            errors.error.details.forEach((item) => {
                validationErrors[item.context.label] = item.message.replace(/"/g, "");
            });

            throw new InvalidDatasException(JSON.stringify(validationErrors));
        }
    }
}

module.exports = Endpoint;