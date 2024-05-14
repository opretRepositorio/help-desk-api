const grupoModel = require('../models/grupoModel');

exports.GetGrupos = async (req, res, next) => {
    try {
        let grupos = new grupoModel();
        const result = await grupos.GetGrupos();
        console.log(result[0]);
        res.status(200).send({ grupos: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetGrupoById = async (req, res, next) => {
    try {
        let { id_grupo } = req.body;
        let grupo = new grupoModel();
        const result = await grupo.GetGrupoById(id_grupo);
        console.log(result);
        res.status(200).send({ grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetGrupoByNombre = async (req, res, next) => {
    try {
        let { grupo_nombre } = req.body;
        let grupo = new grupoModel();
        const result = await grupo.GetGrupoByNombre(grupo_nombre);
        console.log(result);
        res.status(200).send({ grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.SetGrupo = async (req, res, next) => {
    try {
        let { grupo_nombre, grupo_correo_notificacion, grupo_telefono_notificacion } = req.body;
        let grupo = new grupoModel();
        const result = await grupo.SetGrupo(
            grupo_nombre,
            grupo_correo_notificacion,
            grupo_telefono_notificacion
        );
        console.log(result);
        res.status(200).send({ grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
