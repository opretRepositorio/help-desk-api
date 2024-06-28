"use strict";
const database = require('../config/database')
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

class userModel {
    constructor (){}

    // Para el envio del codigo a email del usuario , asi poder recuperar sus credenciales
    SendRecoverCodeToEmail(mailTo, code){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'helpdeskopret@gmail.com',
                pass: 'pbrkhgoccjnsphks'
            }
        });

        const mailOptions = {
            from: 'helpdeskopret@gmail.com',
            to: mailTo,
            subject: 'Recuperacion de Contraseña (Mesa de Ayuda)',
            text: `Use este <${code}> codigo de acceso para restablecer su contraseña, introduzca este codigo para cambiar su credencial!`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error); 
            } else {
                console.log('Email sent: ' + info.response);
                // do something useful
            }
        });
    }

    // Todos los usuarios del sistema
    async GetUsers(){
        let [users, _] = await database.execute('CALL sp_get_usuarios();');
        return users;
    }

    // Obtiene dicho usuario por id del sistema
    async GetUserById(id_usuario){
        let [users, _] = await database.execute(`CALL sp_get_usuario_by_id(${id_usuario});`);
        return users;
    }

    // Todos los usuarios del sistema por tipo de usuario
    async GetUsersByTipo(usuario_tipo){
        let [users, _] = await database.execute(`CALL sp_get_usuarios_by_tipo('${usuario_tipo}');`);
        return users;
    }

    // Un unico usuario por su correo y contraseña
    async GetUser(usuario_correo, usuario_password){
        let [user, _] = await database.execute(`CALL sp_get_usuario('${usuario_correo}','${usuario_password}');`);
        return user;
    }

    // Un unico usuario por su codigo
    async GetUserByCodigo(usuario_codigo){
        let [user, _] = await database.execute(`CALL sp_get_usuario_by_usuario_codigo('${usuario_codigo}');`);
        return user;
    }

    // Un unico usuario por su correo
    async GetUserByCorreo(usuario_correo){
        let [user, _] = await database.execute(`CALL sp_get_usuario_by_usuario_correo('${usuario_correo}');`);
        return user;
    }

    // Inserta o registra a la base de datos un nuevo usuario al sistema
    // async SetUser(
    //     usuario_nombre,
    //     usuario_codigo,
    //     usuario_correo,
    //     usuario_password,
    //     usuario_telefono,
    //     usuario_celular,
    //     usuario_cargo
    // ){
    //     let [user, _] = await database.execute(`INSERT INTO usuario (usuario_nombre, usuario_codigo, usuario_correo, usuario_password, usuario_telefono, usuario_celular, usuario_cargo)
    //     VALUES ('${usuario_nombre}', '${usuario_codigo}', '${usuario_correo}', '${usuario_password}', '${usuario_telefono}', '${usuario_celular}', '${usuario_cargo}')`);
    //     return user;
    // }

    // funcion asincronica para la recuperacion de la password del usuario
    async ForgotPassword(usuario_correo){
        let [user, _] = await database.execute(`CALL sp_get_forgot_password_code('${usuario_correo}');`);
        return user;
    }

    // funcion asincronica para cambiar de la password del usuario
    async ChangePassword(usuario_password, usuario_correo, usuario_estado = 1){
        let [user, _] = await database.execute(`CALL sp_update_change_password('${usuario_password}', '${usuario_correo}', '${usuario_estado}');`);
        return user;
    }                      

    // Genera codigo aleatorio para la recuperacion de password
    GenerateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    //Encrypting text este codigo es para el mismo back-end
    encrypt(text) {
        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    // Decrypting text, este codigo es para el front-end 
    decrypt(text) {
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    }
}

module.exports = userModel;