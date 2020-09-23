class SenderAlertTriesLoginFailed {

    constructor(email) {
        this._email = email;
    }

    async send(message) {
        return await this._email
            .withSubject("Many tries login failed")
            .withTo(message.email)
            .withHtml(`Someone trying login using your email`)
            .send()
    }
}

module.exports = SenderAlertTriesLoginFailed;