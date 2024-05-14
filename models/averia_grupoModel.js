const database = require('../config/database')

class averia_grupoModel {
    constructor (){}

    // Obtiene un averia_grupo de la DATABASE por id_averia_grupo
    async GetAveriaGrupoById(id_averia_grupo){
        let [averia_grupo, _] = await database.execute(`CALL sp_get_averia_grupo_by_id('${id_averia_grupo}');`);
        return averia_grupo;
    }

    // Obtiene un averia_grupo de la DATABASE por id_averia
    async GetAveriaGrupoByIdAveria(id_averia){
        let [averia_grupo, _] = await database.execute(`CALL sp_get_averia_grupo_by_id_averia('${id_averia}');`);
        return averia_grupo;
    }

    // Obtiene un averia_grupo de la DATABASE por id_grupo
    async GetAveriaGrupoByIdGrupo(id_grupo){
        let [averia_grupo, _] = await database.execute(`CALL sp_get_averia_grupo_by_id_grupo('${id_grupo}');`);
        return averia_grupo;
    }

    // Inserta una averia_grupo de la DATABASE por id_averia, id_usuario
    async SetAveriaGrupo(id_averia, id_usuario){
        let [averia_grupo, _] = await database.execute(`CALL sp_set_averia_grupo(
            '${id_averia}',
            '${id_usuario}'
            );`);
        return averia_grupo;
    }
}

module.exports = averia_grupoModel;