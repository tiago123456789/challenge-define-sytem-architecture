const BusinessLogicException = require("common/exceptions/BusinessLogicException");
const InvalidDataException = require("common/exceptions/InvalidDatasException");
const SecurityException = require("common/exceptions/SecurityException");
const ForbiddenException = require("common/exceptions/ForbiddenException");


class UserService {

    constructor(userRepository, encrypterUtil, uuidUtil, producer, token) {
        this._userRepository = userRepository;
        this._encrypterUtil = encrypterUtil;
        this._uuidUtil = uuidUtil;
        this._producer = producer;
        this._token = token;
    }

    async checkValidToken(accessToken) {
        try {
            accessToken = this._token.getWithoutPrefix(accessToken);
            console.log(accessToken);
            await this._token.isValid(accessToken);
        } catch(error) {
            throw new ForbiddenException("Token is invalid or expired!")
        }
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

    async authenticate(credentials) {
        let user = await this._userRepository.findByEmail(credentials.email);
        user = user[0];
        if (!user) {
            throw new SecurityException("Credentials invalids!");
        }

        const isValidPassword = await this._encrypterUtil.compare(credentials.password, user.password);
        if (!isValidPassword) {
            throw new SecurityException("Credentials invalids!");
        }
        
        const datasAuthentication2Step = {
            hash2StepAuthentication: this._uuidUtil.getUuid(),
            codeVerification: this._uuidUtil.getUuid()
        };

        await this._userRepository.update(user.id, {
            "hash_step_2_authentication": datasAuthentication2Step.hash2StepAuthentication,
            "requestId": datasAuthentication2Step.codeVerification
        });

        await this._producer.sendMessage({
            MessageBody: JSON.stringify({
                email: user.email,
                codeVerification: datasAuthentication2Step.codeVerification
            })
        });

        return {
            hash2StepAuthentication: datasAuthentication2Step.hash2StepAuthentication,
        };
    }

    async register(register) {
        this._validaDatas(register);
        const userWithEmail = await this._userRepository.findByEmail(register.email); 
        const isExistUserWithEmail = userWithEmail.length > 0;
        if (isExistUserWithEmail) {
            throw new BusinessLogicException("Informe outro email! Esse não é permitido.")
        }

        register.password = await this._encrypterUtil.getHash(register.password);
        return this._userRepository.insert(register);
    }

    _validaDatas(datas) {
        const messageError = {
            "password": "Password no follow the pattern."
        };
        const password = datas.password;

        const isExistAtLeastSpecialCharacter = /([#$%]){1}/.test(password);
        if (!isExistAtLeastSpecialCharacter) {
            throw new InvalidDataException(JSON.stringify(messageError));
        }

        const isExistAtLeastNumber = /([0-9]){1,}/.test(password);
        if (!isExistAtLeastNumber) {
            throw new InvalidDataException(JSON.stringify(messageError));
        }

        const isExistAtLeastOneUpperCharacter = /([A-Z]){1,}/.test(password);
        if (!isExistAtLeastOneUpperCharacter) {
            throw new InvalidDataException(JSON.stringify(messageError));
        }

        const isExistAtLeastOneLowerCharacter = /([a-z]){1,}/.test(password);
        if (!isExistAtLeastOneLowerCharacter) {
            throw new InvalidDataException(JSON.stringify(messageError));
        }

        const isExistAtLeast10Character = password.length >= 10;
        if (!isExistAtLeast10Character) {
            throw new InvalidDataException(JSON.stringify(messageError));
        }
    }
}

module.exports = UserService;