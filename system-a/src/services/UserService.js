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

}

module.exports = UserService;