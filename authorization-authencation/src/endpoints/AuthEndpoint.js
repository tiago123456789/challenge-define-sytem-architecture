const Endpoint = require("./Endpoint");
const Joi = require("joi");

class AuthEndpoint extends Endpoint {

    constructor(userService) {
        super();
        this._userService = userService;
        this.authenticate = this.authenticate.bind(this);
    }

    getRulesValidation() {
        return Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
    }


    async authenticate(request, response, next) {
        try {
            const datas = request.body;
            this.isValidDatas(datas);
            const datas2StepAuthentication = await this._userService.authenticate(datas);
            return response.json(datas2StepAuthentication);
        } catch(error) {
            next(error);
        }
    } 
}

module.exports = AuthEndpoint;