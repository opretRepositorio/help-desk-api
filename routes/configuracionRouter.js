const express = require('express');
const configuracion_controller = require('../controllers/configuracionController');
const configuracion_router = express.Router();

// Router obtiene todos los configuracion con GET
configuracion_router.route("/get_configuracion/by_id").post(configuracion_controller.GetConfiguracionById);

// Router obtiene configuracion por userName y password con POST
configuracion_router.route("/get_configuracion/by_id_grupo").post(configuracion_controller.GetConfiguracionByIdGrupo);

// Router inserta informacion introducida por el configuracion con POST
configuracion_router.route("/get_configuracion/by_id_usuario").post(configuracion_controller.GetConfiguracionByIdUsuario);

// Router inserta informacion introducida por el configuracion con POST
configuracion_router.route("/set_configuracion").post(configuracion_controller.SetConfiguracion);

// module para exportar configuracion_router, acceso publico a otros modulos 
module.exports = configuracion_router;