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

        const financialAssets = await this._userRepository.findFinancialAssetsByUserId(user.id);
        return { ...user, financialAssets };
    }
}

module.exports = UserService;