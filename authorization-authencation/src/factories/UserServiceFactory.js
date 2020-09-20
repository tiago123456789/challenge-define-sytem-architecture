const UserService = require("../services/UserService")

const userRepositoryFactory = require("./UserRepositoryFactory");
const encrypterUtil = require("./../utils/EncrypterUtil");
const uuidUtil = require("./../utils/UuidUtil");
const Producer = require("common/sqs/Producer");


module.exports = () => {
    const producer = new Producer(process.env.QUEUE_URL_NOTIFICATION);
    return new UserService(userRepositoryFactory(), encrypterUtil, uuidUtil, producer);
}