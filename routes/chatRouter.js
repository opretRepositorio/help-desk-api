const express = require('express');
const chat_controller = require('../controllers/chatController');
const chat_router = express.Router();

// Router obtiene todos los chat con GET
chat_router.route("/get_chat").get(chat_controller.GetChatById);

// Router obtiene chat por id_mensaje con POST
// chat_router.route("/get_chat/by_id").post(chat_controller.GetChatByIdMensaje);

// Router inserta nuevo chat con POST
chat_router.route("/set_chat").post(chat_controller.SetChat);

// module para exportar chat_router, acceso publico a otros modulos 
module.exports = chat_router;
