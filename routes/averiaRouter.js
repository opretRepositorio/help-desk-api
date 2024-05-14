const express = require('express');
const averia_controller = require('../controllers/averiaController');
const averia_router = express.Router();

// Router obtiene la averia por id_averia con POST 
averia_router.route("/get_averia/by_id").post(averia_controller.GetAveriaById);

// Router obtiene la averia por averia_nombre con POST 
averia_router.route("/get_averia/by_averia_nombre").post(averia_controller.GetAveriaByNombre);

// Router inserta la averia con POST 
averia_router.route("/set_averia").post(averia_controller.SetAveria);

// module para exportar averia_router, acceso publico a otros modulos 
module.exports = averia_router;
