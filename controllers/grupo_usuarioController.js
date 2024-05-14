const grupoModel = require('../models/grupo_usuarioModel');

exports.GetGrupoUsuarioById = async (req, res, next) => {
    try {
        let { id_grupo_usuario } = req.body;
        let grupo_usuario = new grupoModel();
        const result = await grupo_usuario.GetGrupoUsuarioById(id_grupo_usuario);
        console.log(result);
        res.status(200).send({ grupo_usuario: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetGrupoUsuarioByIdGrupo = async (req, res, next) => {
    try {
        let { id_grupo } = req.body;
        let grupo_usuario = new grupoModel();
        const result = await grupo_usuario.GetGrupoUsuarioByIdGrupo(id_grupo);
        console.log(result);
        res.status(200).send({ grupo_usuario: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.GetGrupoUsuarioByIdUsuario = async (req, res, next) => {
    try {
        let { id_usuario } = req.body;
        let grupo_usuario = new grupoModel();
        const result = await grupo_usuario.GetGrupoUsuarioByIdUsuario(id_usuario);
        console.log(result);
        res.status(200).send({ grupo_usuario: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

exports.SetGrupoUsuario = async (req, res, next) => {
    try {
        let { id_grupo, id_usuario } = req.body;
        let grupo_usuario = new grupoModel();
        const result = await grupo_usuario.SetGrupoUsuario(id_grupo, id_usuario);
        console.log(result);
        res.status(200).send({ grupo_usuario: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
