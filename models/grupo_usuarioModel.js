const database = require('../config/database')

class grupo_usuarioModel {
    constructor (){}

    // Obtiene un grupo_usuario por id
    async GetGrupoUsuarioById(id_grupo_usuario){
        let [grupo_usuario, _] = await database.execute(`CALL sp_get_grupo_usuario_by_id(${id_grupo_usuario});`);
        return grupo_usuario;
    }

    // Obtiene un grupo_usuario por id_grupo
    async GetGrupoUsuarioByIdGrupo(id_grupo){
        let [grupo_usuario, _] = await database.execute(`CALL sp_get_grupo_usuario_by_id_grupo(${id_grupo});`);
        return grupo_usuario;
    }

    // Obtiene un grupo_usuario por id_usuario
    async GetGrupoUsuarioByIdUsuario(id_usuario){
        let [grupo_usuario, _] = await database.execute(`CALL sp_get_grupo_usuario_by_usuario('${id_usuario}');`);
        return grupo_usuario;
    }

    // Inserta o registra a la base de datos un nuevo grupo_usuario al sistema
    async SetGrupoUsuario(
        id_grupo, id_usuario
    ){
        let [grupo_usuario, _] = await database.execute(`CALL sp_set_grupo_usuario (
            '${id_grupo}', 
            '${id_usuario}'
        );`);
        return grupo_usuario;
    }
}

module.exports = grupo_usuarioModel;