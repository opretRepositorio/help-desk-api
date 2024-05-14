const notaModel = require('../models/notaModel');

exports.GetNotaById = async (req, res, next) => {
    try {
        let { id_nota } = req.body;
        let nota = new notaModel();
        const result = await nota.GetNotaById(id_nota);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetNotaByIdUsuario = async (req, res, next) => {
    try {
        let { id_usuario } = req.body;
        let nota = new notaModel();
        const result = await nota.GetNotaByIdUsuario(id_usuario);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetNotaByIdTicket = async (req, res, next) => {
    try {
        let { id_ticket } = req.body;
        let nota = new notaModel();
        const result = await nota.GetNotaByIdTicket(id_ticket);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetNotaByNotaFecha = async (req, res, next) => {
    try {
        let { nota_fecha } = req.body;
        let nota = new notaModel();
        const result = await nota.GetNotaByNotaFecha(nota_fecha);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetNotaByNotaEstado = async (req, res, next) => {
    try {
        let { nota_estado } = req.body;
        let nota = new notaModel();
        const result = await nota.GetNotaByNotaEstado(nota_estado);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.SetNota = async (req, res, next) => {
    try {
        let { id_usuario, id_ticket, nota_descripcion, nota_fecha, nota_estado } = req.body;
        let nota = new notaModel();
        const result = await nota.SetNota(id_usuario, id_ticket, nota_descripcion, nota_fecha, nota_estado);
        console.log(result);
        res.status(200).send({ nota: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
