const adminModel = require('../models/adminModel');

// Controlador que obtiene todos los usuarios de la base de datos
exports.GetUsers = async (req, res, next) => {
    try {
        let admin = new adminModel();
        const result = await admin.GetUsers();
        console.log(result);
        res.status(200).send({ admin: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

// Controlador que obtiene usuario por usuario_id
exports.GetUserById = async (req, res, next) => {
    try {
        let { id_usuario } = req.body;
        let admin = new adminModel();
        const result = await admin.GetUserById(id_usuario);
        console.log(result);
        res.status(200).send({ admin: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

// Controlador que obtiene usuario por usuario_codigo
exports.GetUserByCodigoUsuario = async (req, res, next) => {
    try {
        let { usuario_codigo } = req.body;
        let admin = new adminModel();
        const result = await admin.GetUserByCodigoUsuario(usuario_codigo);
        console.log(result);
        res.status(200).send({ admin: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

// Controlador que obtiene usuario por usuario_correo
exports.GetUserByCorreoUsuario = async (req, res, next) => {
    try {
        let { usuario_correo } = req.body;
        let admin = new adminModel();
        const result = await admin.GetUserByCorreoUsuario(usuario_correo);
        console.log(result);
        res.status(200).send({ admin: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

// Controlador que agrega un usuario / agente al sistema
exports.SetUser = async (req, res, next) => {
    try {
        let {
            usuario_nombre,
            usuario_codigo,
            usuario_correo,
            usuario_password,
            usuario_telefono,
            usuario_celular,
            usuario_cargo  
        } = req.body;
        
        let admin = new adminModel();
        const result = await admin.SetUser(
            usuario_nombre,
            usuario_codigo,
            usuario_correo,
            usuario_password,
            usuario_telefono,
            usuario_celular,
            usuario_cargo  
        );
        console.log(result);
        res.status(200).send({ admin: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

// Envia un link a correo electronico del usuario que se registrara : solo el usuario tipo administrador lo puede enviar
exports.SendRegisterLink = async (req, res, next) => {
    try {
        let { mailTo } = req.body;
        let admin = new adminModel();
        const result = await admin.SendRegisterLink(mailTo);
        console.log(result);
        res.status(200).send({ link: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

// Valida si el token existe y si no caducó la fecha de uso
exports.ValidateTokenExpiration = async (req, res, next) => {
    try {
        let { token } = req.body;
        let admin = new adminModel();
        const result = await admin.ValidateTokenExpiration(token);
        console.log(result[0][0].user_email)
        result[0].length === 0 ? res.status(200).send({ token: false }) : res.status(200).send({ token: true, email: result[0][0].user_email });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}

exports.UpdateToken = async (req, res, next) => {
    try {
        let { token } = req.body;
        let admin = new adminModel();
        const result = await admin.UpdateToken(token);
        console.log(result);
        res.status(200).send({ token: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
            { 
                error: 'Internal Server Error', 
                message: error 
            });
    }
}
