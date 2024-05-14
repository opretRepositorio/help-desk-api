const averia_grupoModel = require('../models/averia_grupoModel');

exports.GetAveriaGrupoById = async (req, res, next) => {
    try {
        let { id_averia_grupo } = req.body;
        let averia_grupo = new averia_grupoModel();
        const result = await averia_grupo.GetAveriaGrupoById(id_averia_grupo);
        console.log(result);
        res.status(200).send({ averia_grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetAveriaGrupoByIdAveria = async (req, res, next) => {
    try {
        let { id_averia } = req.body;
        let averia_grupo = new averia_grupoModel();
        const result = await averia_grupo.GetAveriaGrupoByIdAveria(id_averia);
        console.log(result);
        res.status(200).send({ averia_grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetAveriaGrupoByIdGrupo = async (req, res, next) => {
    try {
        let { id_grupo } = req.body;
        let averia_grupo = new averia_grupoModel();
        const result = await averia_grupo.GetAveriaGrupoByIdGrupo(id_grupo);
        console.log(result);
        res.status(200).send({ averia_grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.SetAveriaGrupo = async (req, res, next) => {
    try {
        let { id_averia, id_usuario } = req.body;
        let averia_grupo = new averia_grupoModel();
        const result = await averia_grupo.SetAveriaGrupo(id_averia, id_usuario);
        console.log(result);
        res.status(200).send({ averia_grupo: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
