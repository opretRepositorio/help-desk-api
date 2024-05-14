const respuestaModel = require('../models/respuestaModel');

exports.GetRespuestaById = async (req, res, next) => {
    try {
        let { id_respuesta } = req.body;
        let respuesta = new respuestaModel();
        const result = await respuesta.GetRespuestaById(id_respuesta);
        console.log(result);
        res.status(200).send({ respuesta: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetRespuestaByIdUsuario = async (req, res, next) => {
    try {
        let { id_usuario } = req.body;
        let respuesta = new respuestaModel();
        const result = await respuesta.GetRespuestaByIdUsuario(id_usuario);
        console.log(result);
        res.status(200).send({ respuesta: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetRespuestaByIdTicket = async (req, res, next) => {
    try {
        let { id_ticket } = req.body;
        let respuesta = new respuestaModel();
        const result = await respuesta.GetRespuestaByIdTicket(id_ticket);
        console.log(result);
        res.status(200).send({ respuesta: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetRespuestaByFecha = async (req, res, next) => {
    try {
        let { fecha } = req.body;
        let respuesta = new respuestaModel();
        const result = await respuesta.GetRespuestaByFecha(fecha);
        console.log(result);
        res.status(200).send({ respuesta: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.SetRespuesta = async (req, res, next) => {
    try {
        let { id_usuario, id_ticket, respuesta_descripcion, respuesta_fecha, respuesta_asunto } = req.body;
        let respuesta = new respuestaModel();
        const result = await respuesta.SetRespuesta(id_usuario, id_ticket, respuesta_descripcion, respuesta_fecha, respuesta_asunto);
        console.log(result);
        res.status(200).send({ respuesta: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
