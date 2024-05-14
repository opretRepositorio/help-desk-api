const mensajeModel = require('../models/mensajeModel');

exports.GetMensajeById = async (req, res, next) => {
    try {
        let { id_mensaje } = req.body;
        let mensaje = new mensajeModel();
        const result = await mensaje.GetMensajeById(id_mensaje);
        console.log(result);
        res.status(200).send({ mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetMensajeByIdChat = async (req, res, next) => {
    try {
        let { id_chat } = req.body;
        let mensaje = new mensajeModel();
        const result = await mensaje.GetMensajeByIdChat(id_chat);
        console.log(result);
        res.status(200).send({ mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetMensajeByHora = async (req, res, next) => {
    try {
        let { hora } = req.body;
        let mensaje = new mensajeModel();
        const result = await mensaje.GetMensajeByHora(hora);
        console.log(result);
        res.status(200).send({ mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetMensajeByMensaje = async (req, res, next) => {
    try {
        let { mensaje } = req.body;
        let _mensaje = new mensajeModel();
        const result = await _mensaje.GetMensajeByMensaje(mensaje);
        console.log(result);
        res.status(200).send({ _mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetMensajeByVisto = async (req, res, next) => {
    try {
        let { visto } = req.body;
        let mensaje = new mensajeModel();
        const result = await mensaje.GetMensajeVisto(visto);
        console.log(result);
        res.status(200).send({ mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.SetMensaje = async (req, res, next) => {
    try {
        let { id_chat, mensaje, hora, visto } = req.body;
        let _mensaje = new mensajeModel();
        const result = await _mensaje.SetMensaje(id_chat, mensaje, hora, visto);
        console.log(result);
        res.status(200).send({ _mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.UpdateMensajeVisto = async (req, res, next) => {
    try {
        let { visto, id_mensaje } = req.body;
        let mensaje = new mensajeModel();
        const result = await mensaje.UpdateMensajeVisto(visto, id_mensaje);
        console.log(result);
        res.status(200).send({ mensaje: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
