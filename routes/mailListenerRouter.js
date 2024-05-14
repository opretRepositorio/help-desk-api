const express = require('express');
const mail_listener_controller = require('../controllers/mailListenerController');
const mail_listener_router = express.Router();

// Router para obtener mail recien enviado como ticket
mail_listener_router.route("/get_new_mail").get(mail_listener_controller.MailListener);

module.exports = mail_listener_router;