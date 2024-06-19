const database = require('../config/database')
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP

class adminModel {
    constructor (){}

    // Obtiene todos los usuarios del sistema
    async GetUsers(){
        let [_token, _] = await database.execute('CALL sp_get_usuarios ();');
        return users;
    }

    // Obtiene usuario por id_usuario con POST
    async GetUserById(id_usuario){
        let [_token, _] = await database.execute(`CALL sp_get_usuario_by_id (${id_usuario});`);
        return user;
    }

    // Obtiene usuario por usuario_codigo con POST
    async GetUserByCodigoUsuario(usuario_codigo){
        let [_token, _] = await database.execute(`CALL sp_get_usuario_by_usuario_codigo (${usuario_codigo});`);
        return user;
    }

    // Obtiene usuario por usuario_correo con POST
    async GetUserByCorreoUsuario(usuario_correo){
        let [_token, _] = await database.execute(`CALL sp_get_usuario_by_usuario_correo ('${usuario_correo}');`);
        return user;
    }

    // Inserta o registra a la base de datos un nuevo usuario al sistema
    async SetUser(
        usuario_nombre,
        usuario_codigo,
        usuario_correo,
        // usuario_password,
        usuario_telefono,
        usuario_celular,
        usuario_cargo,
        usuario_tipo
    ){
        let [user, _] = await database.execute(`CALL sp_set_usuario (
            '${usuario_nombre}', 
            '${usuario_codigo}', 
            '${usuario_correo}', 
            '${usuario_telefono}', 
            '${usuario_celular}', 
            '${usuario_cargo}',
            '${usuario_tipo}'
        );`);
        
        return user;
    }

    // Envia un link a correo electronico del usuario que se registrara : solo el usuario tipo administrador lo puede enviar
    async SendRegisterLink(mailTo){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'helpdeskopret@gmail.com',
                pass: 'qfgvfyvwxjxntale'
            }
        });

        const token = await this.CreateTemporaryToken(10, mailTo);

        const mailOptions = {
            from: 'helpdeskopret@gmail.com',
            to: mailTo,
            subject: 'Registro de Nuevo Usuario (Mesa de Ayuda)',
            html: `<p>Use este link para <a href="http://localhost:5173/newuser?token=${token}">Registrarse</a> como nuevo usuario y poder tener acceso a la Mesa de Ayuda.</p>`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error); 
            } else {
                console.log('Email sent: ' + info.response);
                // do something useful
            }
        });

        return token;
    }

    // Genera un codigo aleatorio temporal para validar el registro del usuario en particular
    async CreateTemporaryToken(length, mailTo){
        const token = crypto.randomBytes(length).toString('hex');

        await database.execute(`CALL sp_set_token ('${token}','${mailTo}');`);

        return token;
    }

    // Envia un link a correo electronico del usuario que se registrara : solo el usuario tipo administrador lo puede enviar
    async ValidateTokenExpiration(token){
        let [_token, _] = await database.execute(`CALL sp_get_token ('${token}');`);

        return _token;
    }

    // Actualiza el token que dicho usuario uso
    async UpdateToken(token){
        let [_token, _] = await database.execute(`CALL sp_update_token ('${token}');`);
        
        return _token;
    }

    // Actualiza los datos dicho usuario
    async EditUser(
        id_usuario,
        usuario_nombre = null,
        usuario_codigo = null,
        usuario_correo = null,
        usuario_telefono = null,
        usuario_celular = null,
        usuario_cargo = null,
        usuario_tipo  = null
    ){
        let [_user, _] = await database.execute(`CALL sp_update_usuario (
            '${id_usuario}',
            '${usuario_nombre}',
            '${usuario_codigo}',
            '${usuario_correo}',
            '${usuario_telefono}',
            '${usuario_celular}',
            '${usuario_cargo}',
            '${usuario_tipo}'
            );`);
        
        return _user;
    }
}

module.exports = adminModel; 