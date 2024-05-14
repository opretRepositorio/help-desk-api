const configuracionModel = require('../models/configuracionModel')

exports.GetConfiguracionById = async (req, res, next) => {
    let { id_configuracion } = req.body;
    let configuracion = new configuracionModel();
    const result = await configuracion.GetConfiguracionById(id_configuracion);
    console.log(result);

    res.status(200).send( { configuracion: result } );
}

exports.GetConfiguracionByIdGrupo = async (req, res, next) => {
    let { id_grupo } = req.body;
    let configuracion = new configuracionModel();
    const result = await configuracion.GetConfiguracionByIdGrupo(id_grupo);
    console.log(result);

    res.status(200).send( { configuracion: result } );
}

exports.GetConfiguracionByIdUsuario = async (req, res, next) => {
    let { id_usuario } = req.body;
    let configuracion = new configuracionModel();
    const result = await configuracion.GetConfiguracionByIdUsuario(id_usuario);
    console.log(result);

    res.status(200).send( { configuracion: result } );
}

exports.SetConfiguracion = async (req, res, next) => {
    let { 
        id_grupo,
        id_usuario
    } = req.body;
    let configuracion = new configuracionModel();
    const result = await configuracion.SetConfiguracion(
        id_grupo,
        id_usuario
    );
    console.log(result);

    res.status(200).send( { configuracion: result } );
}