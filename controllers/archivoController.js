const archivoModel = require('../models/archivoModel')
const fs = require('fs')

// Controlador que obtiene todos los usuario de la base de datos
exports.GetArchivoById = async (req, res, next) => {
    let {
        id_archivo
    } = req.body;

    let archivo = new archivoModel();
    const result = await archivo.GetArchivoById(id_archivo);
    console.log(result);

    res.status(200).send( { archivo: result } );
}

// Controlador que obtiene todos los usuario de la base de datos
exports.GetArchivoByIdTicket = async (req, res, next) => {
    let {
        id_ticket
    } = req.body;

    let archivo = new archivoModel();
    const result = await archivo.GetArchivoByIdTicket(id_ticket);
    console.log(result);

    res.status(200).send( { archivo: result } );
}

// Controlador que obtiene todos los usuario de la base de datos
exports.GetArchivoByIdRespuesta = async (req, res, next) => {
    let {
        id_respuesta
    } = req.body;

    let archivo = new archivoModel();
    const result = await archivo.GetArchivoByIdRespuesta(id_respuesta);
    console.log(result);

    res.status(200).send( { archivo: result } );
}

// Controlador que obtiene todos los usuario de la base de datos
exports.GetArchivoByIdMensaje = async (req, res, next) => {
    let {
        id_mensaje
    } = req.body;

    let archivo = new archivoModel();
    const result = await archivo.GetArchivoByIdMensaje(id_mensaje);
    console.log(result);

    res.status(200).send( { archivo: result } );
}

// Controlador que agrega un usuario / agente al sistema
exports.SetArchivo = async (req, res, next) => {
    var _archivo = global.__fileuploadedpath

    let {
        id_ticket,
        id_respuesta,
        id_mensaje
    } = req.body;
    
    let archivo = new archivoModel();
    const result = await archivo.SetArchivo(
        _archivo,
        id_ticket,
        id_respuesta,
        id_mensaje
    );
    console.log(result);

    res.status(200).send( { archivo: result } );

    // fs.unlink(global.__fileuploadedpath)
}

// Esta funcion convierte de tipo de dato Buffer a Imagen
// function toBase64(arr) {
//     //arr = new Uint8Array(arr) if it's an ArrayBuffer
//     return btoa(
//        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
//     );
// }