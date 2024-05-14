const archivoModel = require('../models/archivoModel');
const fs = require('fs');

// Controlador que obtiene un archivo por su ID
exports.GetArchivoById = async (req, res, next) => {
    try {
        let { id_archivo } = req.body;
        let archivo = new archivoModel();
        const result = await archivo.GetArchivoById(id_archivo);
        console.log(result);
        res.status(200).send({ archivo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

// Controlador que obtiene archivos por ID de ticket
exports.GetArchivoByIdTicket = async (req, res, next) => {
    try {
        let { id_ticket } = req.body;
        let archivo = new archivoModel();
        const result = await archivo.GetArchivoByIdTicket(id_ticket);
        console.log(result);
        res.status(200).send({ archivo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

// Controlador que obtiene archivos por ID de respuesta
exports.GetArchivoByIdRespuesta = async (req, res, next) => {
    try {
        let { id_respuesta } = req.body;
        let archivo = new archivoModel();
        const result = await archivo.GetArchivoByIdRespuesta(id_respuesta);
        console.log(result);
        res.status(200).send({ archivo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

// Controlador que obtiene archivos por ID de mensaje
exports.GetArchivoByIdMensaje = async (req, res, next) => {
    try {
        let { id_mensaje } = req.body;
        let archivo = new archivoModel();
        const result = await archivo.GetArchivoByIdMensaje(id_mensaje);
        console.log(result);
        res.status(200).send({ archivo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

// Controlador que agrega un archivo al sistema
exports.SetArchivo = async (req, res, next) => {
    try {
        var _archivo = global.__fileuploadedpath;
        let { id_ticket, id_respuesta, id_mensaje } = req.body;
        let archivo = new archivoModel();
        const result = await archivo.SetArchivo(_archivo, id_ticket, id_respuesta, id_mensaje);
        console.log(result);
        res.status(200).send({ archivo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
