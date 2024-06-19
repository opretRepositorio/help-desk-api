const express = require('express');
const mensaje_controller = require('../controllers/mensajeController');
const mensaje_router = express.Router();

// Router obtiene mensaje por id_mensaje con POST
mensaje_router.route("/get_mensaje/by_id").post(mensaje_controller.GetMensajeById);

// Router obtiene mensaje por id_chat con POST
mensaje_router.route("/get_mensaje/by_id_chat").post(mensaje_controller.GetMensajeByIdChat);

// Router obtiene mensaje por id_usuario con POST
mensaje_router.route("/get_mensaje/by_hora").post(mensaje_controller.GetMensajeByHora);

// Router obtiene mensaje por id_ticket con POST
// mensaje_router.route("/get_mensaje/by_id_ticket").post(mensaje_controller.GetMensajeByMensaje);

// Router obtiene mensaje por nota_fecha con POST
mensaje_router.route("/get_mensaje/by_nota_fecha").post(mensaje_controller.GetMensajeByVisto);

// Router inserta mensaje con POST
mensaje_router.route("/set_mensaje").post(mensaje_controller.SetMensaje);

// Router actualiza mensaje visto con POST
mensaje_router.route("/update_mensaje_visto").patch(mensaje_controller.UpdateMensajeVisto);

// module para exportar nota_usuario_router, acceso publico a otros modulos 
module.exports = mensaje_router;