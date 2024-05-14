const express = require('express');
const grupo_controller = require('../controllers/grupoController');
const grupo_router = express.Router();

// Router obtiene todos los grupos con GET
grupo_router.route("/get_grupos").get(grupo_controller.GetGrupos);

// Router obtiene grupo por userName y password con POST
grupo_router.route("/get_grupo/by_id").post(grupo_controller.GetGrupoById);

// Router inserta informacion introducida por el grupo con POST
grupo_router.route("/get_grupo/by_grupo_nombre").post(grupo_controller.GetGrupoByNombre);

// Router inserta informacion introducida por el grupo con POST
grupo_router.route("/set_grupo").post(grupo_controller.SetGrupo);

// module para exportar grupo_router, acceso publico a otros modulos 
module.exports = grupo_router;
