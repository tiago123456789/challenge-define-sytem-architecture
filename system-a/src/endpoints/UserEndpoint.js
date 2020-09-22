const Endpoint = require("./Endpoint");
const Joi = require("joi");

class UserEndpoint extends Endpoint {

    constructor(userService) {
        super();
        this._userService = userService;
        this.findByCpf = this.findByCpf.bind(this);
    }

    getRulesValidation() {
        return Joi.object();
    }

    async findByCpf(request, response, next) {
        try {
            const cpf = request.params.cpf;
            const user = await this._userService.findByCpf(cpf);
            return response.json(user);
        } catch(error) {
            next(error);
        }
    }
}

module.exports = UserEndpoint;