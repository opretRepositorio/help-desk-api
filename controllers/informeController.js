const informeModel = require('../models/informeModel');

exports.GetInformeById = async (req, res, next) => {
    try {
        let { id_informe } = req.body;
        let informe = new informeModel();
        const result = await informe.GetInformeById(id_informe);
        console.log(result);
        res.status(200).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetInformes = async (req, res, next) => {
    try {
        let informe = new informeModel();
        const result = await informe.GetInformes();
        console.log(result);
        res.status(200).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}


exports.GetInformeByIdTicket = async (req, res, next) => {
    try {
        let { id_ticket } = req.body;
        let informe = new informeModel();
        const result = await informe.GetInformeByIdTicket(id_ticket);
        console.log(result);
        res.status(200).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}


exports.GetInformeByIdUsuario = async (req, res, next) => {
    try {
        let { id_usuario } = req.body;
        let informe = new informeModel();
        const result = await informe.GetInformeByIdUsuario(id_usuario);
        console.log(result);
        res.status(200).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetInformeByFecha = async (req, res, next) => {
    try {
        let { fecha } = req.body;
        let informe = new informeModel();
        const result = await informe.GetInformeByFecha(fecha);
        console.log(result);
        res.status(201).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}


exports.SetInforme = async (req, res, next) => {
    try {
        let { id_usuario, id_ticket, fecha } = req.body;
        let informe = new informeModel();
        const result = await informe.SetInforme(id_usuario, id_ticket, fecha);
        console.log(result);
        res.status(201).send({ informe: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
