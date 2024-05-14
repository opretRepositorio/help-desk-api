const express = require('express');
const averia_grupo_controller = require('../controllers/averia_grupoController');
const averia_grupo_router = express.Router();

// Router obtiene la averia_grupo por id_averia con POST 
averia_grupo_router.route("/get_averia_grupo/by_id").post(averia_grupo_controller.GetAveriaGrupoById);

// Router obtiene la averia_grupo por averia_nombre con POST 
averia_grupo_router.route("/get_averia_grupo/by_id_averia").post(averia_grupo_controller.GetAveriaGrupoByIdAveria);

// Router obtiene la averia_grupo por averia_nombre con POST 
averia_grupo_router.route("/get_averia_grupo/by_id_grupo").post(averia_grupo_controller.GetAveriaGrupoByIdGrupo);

// Router inserta la averia_grupo con POST 
averia_grupo_router.route("/set_averia_grupo").post(averia_grupo_controller.SetAveriaGrupo);

// module para exportar averia_grupo_router, acceso publico a otros modulos 
module.exports = averia_grupo_router;
