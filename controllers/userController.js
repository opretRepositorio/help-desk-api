const userModel = require('../models/userModel');
global.__code;

// Controlador que obtiene todos los usuario de la base de datos
exports.GetUsers = async (req, res, next) => {
    try {
        let users = new userModel();
        const result = await users.GetUsers();
        console.log(result[0]);
        res.status(200).send({ users: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

// Controlador que obtiene todos los usuario por usuario_tipo de la base de datos
exports.GetUsersByTipo = async (req, res, next) => {
    try {
        let { usuario_tipo } = req.body;
        let users = new userModel();
        const result = await users.GetUsersByTipo(usuario_tipo);
        console.log(result[0]);
        res.status(200).send({ users: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

// Controlador que obtiene usuario por usuario_correo y usuario_password
exports.GetUser = async (req, res, next) => {
    try {
        let { usuario_correo, usuario_password } = req.body;
        let user = new userModel();
        const result = await user.GetUser(usuario_correo, usuario_password);
        console.log(result[0]);
        res.status(200).send({ user: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.ConfirmPassword = async (req, res, next) => {
    try {
        let { usuario_password, usuario_correo } = req.body;
        let user = new userModel();
        const result = await user.ChangePassword(usuario_password, usuario_correo);
        
        res.status(200).send({ user: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.ForgotPassword = async (req, res, next) => {
    try {
        let { usuario_correo } = req.body;
        let user = new userModel();
        const result = await user.ForgotPassword(usuario_correo);
        let ifExists = result[0][0].IfExits;
        console.log(ifExists);

        if (result[0][0].IfExits) {
            const code = user.GenerateRandomInteger(99999);
            user.SendRecoverCodeToEmail(usuario_correo, code);
            global.__code = code;
        }

        res.status(200).send({ user: ifExists });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

// exports.ConfirmPassword = async (req, res, next) => {
//     try {
//         let { usuario_password, usuario_correo } = req.body;
//         let user = new userModel();
//         const result = await user.ChangePassword(usuario_password, usuario_correo);
//         res.status(200).send({ user: result });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(
//         { 
//             error: 'Internal Server Error', 
//             message: error 
//         });
//     }
// }

exports.ChangePassword = async (req, res, next) => {
    try {
        let { usuario_password, usuario_correo } = req.body;
        let user = new userModel();
        const result = await user.ChangePassword(usuario_password, usuario_correo);
        res.status(200).send({ user: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.MatchRecoveryCode = async (req, res, next) => {
    try {
        let { code } = req.body;

        if (Number(code) === global.__code) {
            res.status(200).send({ user: true });
        } else {
            res.status(200).send({ user: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
