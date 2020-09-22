const Endpoint = require("./Endpoint");
const Joi = require("joi");

class UserEndpoint extends Endpoint {

    constructor(userService, cache) {
        super();
        this._userService = userService;
        this._cache = cache;
        this.findByCpf = this.findByCpf.bind(this);
    }

    getRulesValidation() {
        return Joi.object();
    }

    async findByCpf(request, response, next) {
        try {
            const cpf = request.params.cpf;
            const userCpfInCache = await this._cache.smembers(cpf);
            const isNotNull = userCpfInCache.length > 0;
            if (isNotNull) {
                return response.json(userCpfInCache);
            }

            const user = await this._userService.findByCpf(cpf);
            await this._cache.sadd(cpf, [ user ], 900);
            return response.json(user);
        } catch(error) {
            next(error);
        }
    }
}

module.exports = UserEndpoint;