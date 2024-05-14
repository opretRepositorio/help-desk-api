const express = require('express');
const admin_controller = require('../controllers/adminController');
const admin_router = express.Router();

// Router obtiene todos los usuarios con GET
admin_router.route("/get_users").get(admin_controller.GetUsers);

// Router obtiene usuario por id_usuario con POST
admin_router.route("/get_user/by_id").post(admin_controller.GetUserById);

// Router obtiene usuario por id_usuario con POST
admin_router.route("/get_user/by_id").post(admin_controller.GetUserById);

// Router obtiene usuario por usuario_codigo con POST
admin_router.route("/get_user/by_usuario_codigo").post(admin_controller.GetUserByCodigoUsuario);

// Router obtiene usuario por usuario_correo con POST
admin_router.route("/get_user/by_usuario_correo").post(admin_controller.GetUserByCorreoUsuario);

// Router inserta informacion introducida por el usuario con POST
admin_router.route("/register/set_user").post(admin_controller.SetUser);

// Router envia link de registro por correo electronico para crear usuario con POST
admin_router.route("/register/send_link").post(admin_controller.SendRegisterLink);

// Router para validar token si puede o no finalizar proceso de nuevo usuario
admin_router.route("/register/validate_token").post(admin_controller.ValidateTokenExpiration);

// module para exportar admin_router, acceso publico a otros modulos 
module.exports = admin_router;
