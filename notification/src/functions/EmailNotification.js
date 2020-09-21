'use strict';

const SenderCodeVerification = require("./../services/SenderCodeVerification");
const Email = require("./../email/Email");

const email = new Email();
const senderCodeVerification = new SenderCodeVerification(email);

exports.main = async event => {
  const message = JSON.parse(event.Records[0].body);
  await senderCodeVerification.send(message);
};
