const grupoModel = require('../models/grupo_usuarioModel')

exports.GetGrupoUsuarioById = async (req, res, next) => {
    let { id_grupo_usuario } = req.body;
    let grupo_usuario = new grupoModel();
    const result = await grupo_usuario.GetGrupoUsuarioById(id_grupo_usuario);
    console.log(result);

    res.status(200).send( { grupo_usuario: result } );
}

exports.GetGrupoUsuarioByIdGrupo = async (req, res, next) => {
    let { id_grupo } = req.body;
    let grupo_usuario = new grupoModel();
    const result = await grupo_usuario.GetGrupoUsuarioByIdGrupo(id_grupo);
    console.log(result);

    res.status(200).send( { grupo_usuario: result } );
}

exports.GetGrupoUsuarioByIdUsuario = async (req, res, next) => {
    let { id_usuario } = req.body;
    let grupo_usuario = new grupoModel();
    const result = await grupo_usuario.GetGrupoUsuarioByIdUsuario(id_usuario);
    console.log(result);

    res.status(200).send( { grupo_usuario: result } );
}

exports.SetGrupoUsuario = async (req, res, next) => {
    let { id_grupo, id_usuario } = req.body;
    let grupo_usuario = new grupoModel();
    const result = await grupo_usuario.SetGrupoUsuario(id_grupo, id_usuario);
    console.log(result);

    res.status(200).send( { grupo_usuario: result } );
}