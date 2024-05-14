const mensajeModel = require('../models/mensajeModel')

exports.GetMensajeById = async (req, res, next) => {
    let { id_mensaje } = req.body;
    let mensaje = new mensajeModel();
    const result = await mensaje.GetMensajeById(id_mensaje);
    console.log(result);

    res.status(200).send( { mensaje: result } );
}

exports.GetMensajeByIdChat = async (req, res, next) => {
    let { id_chat } = req.body;
    let mensaje = new mensajeModel();
    const result = await mensaje.GetMensajeByIdChat(id_chat);
    console.log(result);

    res.status(200).send( { mensaje: result } );
}

exports.GetMensajeByHora = async (req, res, next) => {
    let { hora } = req.body;
    let mensaje = new mensajeModel();
    const result = await mensaje.GetMensajeByHora(hora);
    console.log(result);

    res.status(200).send( { mensaje: result } );
}

exports.GetMensajeByMensaje = async (req, res, next) => {
    let { mensaje } = req.body;
    let _mensaje = new mensajeModel();
    const result = await _mensaje.GetMensajeByMensaje(mensaje);
    console.log(result);

    res.status(200).send( { _mensaje: result } );
}

exports.GetMensajeByVisto = async (req, res, next) => {
    let { visto } = req.body;
    let mensaje = new mensajeModel();
    const result = await mensaje.GetMensajeVisto(visto);
    console.log(result);

    res.status(200).send( { mensaje: result } );
}

exports.SetMensaje = async (req, res, next) => {
    let { 
        // id_mensaje
        id_chat,
        mensaje,
        hora,
        visto
    } = req.body;
    let _mensaje = new mensajeModel();
    const result = await _mensaje.SetMensaje(
        // id_mensaje
        id_chat,
        mensaje,
        hora,
        visto
    );
    console.log(result);

    res.status(200).send( { _mensaje: result } );
}

exports.UpdateMensajeVisto = async (req, res, next) => {
    let { 
        visto,
        id_mensaje
    } = req.body;
    let mensaje = new mensajeModel();
    const result = await mensaje.UpdateMensajeVisto(
        visto,
        id_mensaje
    );
    console.log(result);

    res.status(200).send( { mensaje: result } );
}