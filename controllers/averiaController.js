const averiaModel = require('../models/averiaModel')

exports.GetAveriaById = async (req, res, next) => {
    let { id_averia } = req.body;
    let averia = new averiaModel();
    const result = await averia.GetAveriaById(id_averia);
    console.log(result);

    res.status(200).send( { averia: result } );
}

exports.GetAveriaByNombre = async (req, res, next) => {
    let { averia_nombre } = req.body;
    let averia = new averiaModel();
    const result = await averia.GetAveriaByNombre(averia_nombre);
    console.log(result);

    res.status(200).send( { averia: result } );
}

exports.SetAveria = async (req, res, next) => {
    let { averia_nombre } = req.body;
    let averia = new averiaModel();
    const result = await averia.SetAveria(averia_nombre);
    console.log(result);

    res.status(200).send( { averia: result } );
}
