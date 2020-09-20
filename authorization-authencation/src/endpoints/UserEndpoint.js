const Endpoint = require("./Endpoint");
const Joi = require("joi");

class UserEndpoint extends Endpoint {

    constructor(userService) {
        super();
        this._userService = userService;
        this.register = this.register.bind(this);
    }

    getRulesValidation() {
        return Joi.object({
            name: Joi.string().min(2).required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
    }

    async register(request, response, next) {
        try {
            const datas = request.body;
            this.isValidDatas(datas);
            await this._userService.register(datas);
            return response.sendStatus(201);
        } catch(error) {
            next(error);
        }
    }
}

module.exports = UserEndpoint;