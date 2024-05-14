const express = require('express');
const nota_controller = require('../controllers/notaController');
const nota_router = express.Router();

// Router obtiene nota por id_nota con POST
nota_router.route("/get_nota/by_id").post(nota_controller.GetNotaById);

// Router obtiene nota por id_usuario con POST
nota_router.route("/get_nota/by_id_usuario").post(nota_controller.GetNotaByIdUsuario);

// Router obtiene nota por id_ticket con POST
nota_router.route("/get_nota/by_id_ticket").post(nota_controller.GetNotaByIdTicket);

// Router obtiene nota por nota_fecha con POST
nota_router.route("/get_nota/by_nota_fecha").post(nota_controller.GetNotaByNotaFecha);

// Router obtiene nota por nota_estado con POST
nota_router.route("/get_nota/by_id_nota_estado").post(nota_controller.GetNotaByNotaEstado);

// Router inserta nota con POST
nota_router.route("/set_nota").post(nota_controller.SetNota);

// module para exportar nota_router, acceso publico a otros modulos 
module.exports = nota_router;
