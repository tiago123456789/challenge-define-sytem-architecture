'use strict';

const SenderAlertTriesLoginFailed = require("../services/SenderAlertTriesLoginFailed");
const SenderCodeVerification = require("./../services/SenderCodeVerification");
const TypeNotification = require("common/model/TypeNotification");
const Email = require("./../email/Email");

const email = new Email();
const senderCodeVerification = new SenderCodeVerification(email);
const senderAlertTriesLoginFailed = new SenderAlertTriesLoginFailed(email);

exports.main = async event => {
  const message = JSON.parse(event.Records[0].body);
  if (message.action == TypeNotification.ALERT_MORE_THAN_5_TRIES_LOGIN_FAILED) {
    await senderAlertTriesLoginFailed.send(message);
    return;
  }

  if (message.action == TypeNotification.CODE_VERIFICATION) {
    await senderCodeVerification.send(message);
    return;
  }
};
