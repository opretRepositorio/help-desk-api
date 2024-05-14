const express = require('express');
const respuesta_controller = require('../controllers/respuestaController');
const respuesta_router = express.Router();

// Router obtiene la respuesta por id_respuesta con POST 
respuesta_router.route("/get_respuesta/by_id").post(respuesta_controller.GetRespuestaById);

// Router obtiene la respuesta por id_respuesta con POST 
respuesta_router.route("/get_respuesta/by_id_usuario").post(respuesta_controller.GetRespuestaByIdUsuario);

// Router obtiene la respuesta por id_respuesta con POST 
respuesta_router.route("/get_respuesta/by_id_ticket").post(respuesta_controller.GetRespuestaByIdTicket);

// Router obtiene la respuesta por id_respuesta con POST 
respuesta_router.route("/get_respuesta/by_fecha").post(respuesta_controller.GetRespuestaByFecha);

// Router inserta la respuesta con POST 
respuesta_router.route("/set_respuesta").post(respuesta_controller.SetRespuesta);

// module para exportar respuesta_router, acceso publico a otros modulos 
module.exports = respuesta_router;
