const averiaModel = require('../models/averiaModel');

exports.GetAveriaById = async (req, res, next) => {
    try {
        let { id_averia } = req.body;
        let averia = new averiaModel();
        const result = await averia.GetAveriaById(id_averia);
        console.log(result);
        res.status(200).send({ averia: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetAveriaByNombre = async (req, res, next) => {
    try {
        let { averia_nombre } = req.body;
        let averia = new averiaModel();
        const result = await averia.GetAveriaByNombre(averia_nombre);
        console.log(result);
        res.status(200).send({ averia: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.SetAveria = async (req, res, next) => {
    try {
        let { averia_nombre } = req.body;
        let averia = new averiaModel();
        const result = await averia.SetAveria(averia_nombre);
        console.log(result);
        res.status(200).send({ averia: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
