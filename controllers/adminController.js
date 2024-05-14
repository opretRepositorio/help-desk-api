const adminModel = require('../models/adminModel')

// Controlador que obtiene todos los usuario de la base de datos
exports.GetUsers = async (req, res, next) => {
    let admin = new adminModel();
    const result = await admin.GetUsers();
    console.log(result);

    res.status(200).send( { admin: result } );
}

// Controlador que obtiene usuario por usuario_correo y usuario_password
exports.GetUserById = async (req, res, next) => {
    let { id_usuario } = req.body;
    let admin = new adminModel();
    const result = await admin.GetUserById(id_usuario);
    console.log(result);
    
    res.status(200).send( { admin: result } );
}

// Controlador que obtiene usuario por usuario_correo y usuario_password
exports.GetUserByCodigoUsuario = async (req, res, next) => {
    let { usuario_codigo } = req.body;
    let admin = new adminModel();
    const result = await admin.GetUserByCodigoUsuario(usuario_codigo);
    console.log(result);
    
    res.status(200).send( { admin: result } );
}


// Controlador que obtiene usuario por usuario_correo y usuario_password
exports.GetUserByCorreoUsuario = async (req, res, next) => {
    let { usuario_correo } = req.body;
    let admin = new adminModel();
    const result = await admin.GetUserByCorreoUsuario(usuario_correo);
    console.log(result);
    
    res.status(200).send( { admin: result } );
}

// Controlador que agrega un usuario / agente al sistema
exports.SetUser = async (req, res, next) => {
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

    res.status(200).send( { admin: result } );
}

// Envia un link a correo electronico del usuario que se registrara : solo el usuario tipo administrador lo puede enviar
exports.SendRegisterLink = async (req, res, next) => {
    let {
        mailTo,
    } = req.body;

    let admin = new adminModel();
    const result = await admin.SendRegisterLink(
        mailTo,
    );
    console.log(result);

    res.status(200).send( { admin: result } );
}

// Valida si el token existe y si no caduco la fecha de uso
exports.ValidateTokenExpiration = async (req, res, next) => {
    let {
        token,
    } = req.body;

    let admin = new adminModel();
    const result = await admin.ValidateTokenExpiration(
        token,
    );
    console.log(result);

    res.status(200).send( { admin: result } );
}