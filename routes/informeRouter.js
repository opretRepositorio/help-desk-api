const express = require('express');
const informe_controller = require('../controllers/informeController');
const informe_router = express.Router();

// Router obtiene los informenes con GET
informe_router.route("/get_informenes").get(informe_controller.GetInformes);

// Router obtiene informe por id_informe con POST
informe_router.route("/get_informe/by_id").post(informe_controller.GetInformeById);

// Router obtiene id_informe por id_usuario con POST
informe_router.route("/get_informe/by_id_usuario").post(informe_controller.GetInformeByIdUsuario);

// Router obtiene id_informe por id_ticket con POST
informe_router.route("/get_informe/by_id_ticket").post(informe_controller.GetInformeByIdTicket);

// Router obtiene id_informe por fecha con POST
informe_router.route("/get_informe/by_fecha").post(informe_controller.GetInformeByFecha);

// Router inserta id_informe con POST
informe_router.route("/set_informe").post(informe_controller.SetInforme);

// module para exportar informe_router, acceso publico a otros modulos 
module.exports = informe_router;
