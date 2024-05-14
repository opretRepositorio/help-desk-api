const grupoModel = require('../models/grupoModel')

exports.GetGrupos = async (req, res, next) => {
    let grupos = new grupoModel();
    const result = await grupos.GetGrupos();
    console.log(result[0]);

    res.status(200).send( { grupos: result[0] } );
}

exports.GetGrupoById = async (req, res, next) => {
    let { id_grupo } = req.body;
    let grupo = new grupoModel();
    const result = await grupo.GetGrupoById(id_grupo);
    console.log(result);

    res.status(200).send( { grupo: result } );
}

exports.GetGrupoByNombre = async (req, res, next) => {
    let { grupo_nombre } = req.body;
    let grupo = new grupoModel();
    const result = await grupo.GetGrupoByNombre(grupo_nombre);
    console.log(result);

    res.status(200).send( { grupo: result } );
}

exports.SetGrupo = async (req, res, next) => {
    let { 
        grupo_nombre,
        grupo_correo_notificacion,
        grupo_telefono_notificacion
    } = req.body;
    let grupo = new grupoModel();
    const result = await grupo.SetGrupo(
        grupo_nombre,
        grupo_correo_notificacion,
        grupo_telefono_notificacion
    );
    console.log(result);

    res.status(200).send( { grupo: result } );
}