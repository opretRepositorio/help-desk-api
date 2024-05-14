const express = require('express');
const grupo_usuario_controller = require('../controllers/grupo_usuarioController');
const grupo_usuario_router = express.Router();

// Router obtiene grupo_usuario por userName y password con POST
grupo_usuario_router.route("/get_grupo_usuario/by_id").post(grupo_usuario_controller.GetGrupoUsuarioById);

// Router obtiene grupo_usuario por userName y password con POST
grupo_usuario_router.route("/get_grupo_usuario/by_id_grupo").post(grupo_usuario_controller.GetGrupoUsuarioByIdGrupo);

// Router inserta informacion introducida por el grupo_usuario con POST
grupo_usuario_router.route("/get_grupo_usuario/by_id_usuario").post(grupo_usuario_controller.GetGrupoUsuarioByIdUsuario);

// Router inserta informacion introducida por el grupo_usuario con POST
grupo_usuario_router.route("/set_grupo_usuario").post(grupo_usuario_controller.SetGrupoUsuario);

// module para exportar grupo_usuario_router, acceso publico a otros modulos 
module.exports = grupo_usuario_router;
