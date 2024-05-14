const userModel = require('../models/userModel');
global.__code;

// Controlador que obtiene todos los usuario de la base de datos
exports.GetUsers = async (req, res, next) => {
    let users = new userModel();
    const result = await users.GetUsers();
    console.log(result[0]);

    res.status(200).send( { users: result[0] } );
}

// Controlador que obtiene todos los usuario por usuario_tipo de la base de datos
exports.GetUsersByTipo = async (req, res, next) => {
    let { usuario_tipo } = req.body;
    let users = new userModel();
    const result = await users.GetUsersByTipo(usuario_tipo);
    console.log(result[0]);

    res.status(200).send( { users: result[0] } );
}

// Controlador que obtiene usuario por usuario_correo y usuario_password
exports.GetUser = async (req, res, next) => {
    let { usuario_correo, usuario_password } = req.body;
    let user = new userModel();
    const result = await user.GetUser(usuario_correo, usuario_password); 
    console.log(result[0]);
    
    res.status(200).send( { user: result[0] } );
}

exports.ForgotPassword = async (req, res, next) => {
    let { usuario_correo } = req.body;
    let user = new userModel();
    const result = await user.ForgotPassword(usuario_correo);
    let ifExits = result[0][0].IfExits
    console.log(ifExits);

    if (result[0][0].IfExits){
        const code = user.GenerateRandomInteger(99999);
        user.SendRecoverCodeToEmail(usuario_correo, code);
        // user = users.encrypt(code.toString())
        global.__code = code
    }
    
    res.status(200).send( { user: ifExits } );
}

exports.ChangePassword = async (req, res, next) => {
    let { usuario_password, usuario_correo } = req.body;
    let user = new userModel();
    const result = await user.ChangePassword(usuario_password, usuario_correo);

    res.status(200).send( { user: result } );
}

exports.MatchRecoveryCode = async (req, res, next) => {
    let { code } = req.body;

    if (Number(code) === global.__code){
        res.status(200).send( { user: true } );
    }
    else {
        res.status(200).send( { user: false } );
    }
}

// Controlador que agrega un usuario / agente al sistema
// exports.SetUser = async (req, res, next) => {
//     let {
//         usuario_nombre,
//         usuario_codigo,
//         usuario_correo,
//         usuario_password,
//         usuario_telefono,
//         usuario_celular,
//         usuario_cargo  
//     } = req.body;
    
//     let users = new userModel();
//     const result = await users.SetUser(
//         usuario_nombre,
//         usuario_codigo,
//         usuario_correo,
//         usuario_password,
//         usuario_telefono,
//         usuario_celular,
//         usuario_cargo  
//     );
//     console.log(result);

//     res.status(201).send( { user: result } );
// }