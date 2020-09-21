class SenderCodeVerification {

    constructor(email) {
        this._email = email;
    }

    async send(message) {
        return await this._email
            .withSubject("Code verification")
            .withName("Code verification")
            .withTo(message.email)
            .withHtml(`Code verification: ${message.codeVerification}`)
            .send()
    }
}

module.exports = SenderCodeVerification;