const NotFoundException = require("common/exceptions/NotFoundException");

class UserService {

    constructor(userRepository) {
        this._userRepository = userRepository;
    }

    async findByCpf(cpf) {
        let user = await this._userRepository.findByCpf(cpf);
        const isNull = user.length == 0;
        user = user[0]
        if (isNull) {
            throw new NotFoundException("Não foi encontrada nenhuma pessoa com o cpf informado.")
        }

        const debts = await this._userRepository.findDebtsByUserId(user.id);
        return { ...user, debts };
    }

    async checkSecondStepAuthentication(credentials) {
        let user = await this._userRepository.findByHash(credentials.hash);
        user = user[0];

        if (!user) {
            throw new SecurityException("Code invalid!");
        }

        const isValidCode = user.requestId == credentials.code;
        if (!isValidCode) {
            throw new SecurityException("Code invalid!");
        }

        await this._userRepository.update(user.id, {
            "hash_step_2_authentication": null,
            "requestId": null
        });

        return this._token.build({
            id: user.id
        });
    }
}

module.exports = UserService;