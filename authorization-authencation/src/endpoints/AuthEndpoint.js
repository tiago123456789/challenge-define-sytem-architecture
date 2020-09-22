const Endpoint = require("./Endpoint");
const Constantes = require("common/constants/App");
const Joi = require("joi");

class AuthEndpoint extends Endpoint {

    constructor(userService) {
        super();
        this._userService = userService;
        this.authenticate = this.authenticate.bind(this);
        this.checkValidToken = this.checkValidToken.bind(this);
        this.checkSecondStepAuthentication = this.checkSecondStepAuthentication.bind(this);
    }

    getRulesValidation() {
        return Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
    }

    async checkSecondStepAuthentication(request, response, next) {
        try {
            const hash = request.params.hash;
            const datas = request.body;
            const accessToken = await this._userService.checkSecondStepAuthentication({
                ...datas, hash
            });
            return response.json({
                accessToken
            });
        } catch(error) {
            next(error);
        }
    }

    async checkValidToken(request, response, next) {
        try {
            const accessToken = request.get(Constantes.HEADER_PARAM_AUTH)
            await this._userService.checkValidToken(accessToken); 
            return response.sendStatus(200);
        } catch(error) {
            next(error);
        }
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