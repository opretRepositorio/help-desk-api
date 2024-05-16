const express = require('express');
const user_controller = require('../controllers/userController');
const user_router = express.Router();

// Router obtiene todos los usuarios con GET
user_router.route("/get_users").get(user_controller.GetUsers);

// Router obtiene usuario por userName y password con POST
user_router.route("/get_user/login").post(user_controller.GetUser);

// Router obtiene usuarios por tipo de usuario con POST
user_router.route("/get_users/by_tipo_usuario").post(user_controller.GetUsersByTipo);

// Router para confirmar contrasena de usuario para finalizar registro del mismo con POST
user_router.route("/set_user/confirm_password").post(user_controller.ConfirmPassword);

// Router para recuperar informacion o credenciales como la password del usuario
user_router.route("/get_user/forgot_password").post(user_controller.ForgotPassword);

// Router para cambiar la password del usuario
user_router.route("/get_user/change_password").post(user_controller.ChangePassword);

// Router para comprobar si el codigo coincide con el codigo generado por el sistema
user_router.route("/get_user/match_recovery_code").post(user_controller.MatchRecoveryCode);

// module para exportar user_router, acceso publico a otros modulos
module.exports = user_router;
