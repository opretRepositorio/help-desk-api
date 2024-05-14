const database = require('../config/database')

class configuracionModel {
    constructor (){}

    // Obtiene un configuracion por id
    async GetConfiguracionById(id_configuracion){
        let [configuracion, _] = await database.execute(`CALL sp_get_configuracion_by_id (${id_configuracion});`);
        return configuracion;
    }

    // Obtiene un configuracion por id_grupo
    async GetConfiguracionByIdGrupo(id_grupo){
        let [configuracion, _] = await database.execute(`CALL sp_get_configuracion_by_id_grupo (${id_grupo});`);
        return configuracion;
    }

    // Obtiene un configuracion por id_usuario
    async GetConfiguracionByIdUsuario(id_usuario){
        let [configuracion, _] = await database.execute(`CALL sp_get_configuracion_by_id_usuario ('${id_usuario}');`);
        return configuracion;
    }

    // Inserta o registra a la base de datos un nuevo configuracion al sistema
    async SetConfiguracion(
        id_grupo,
        id_usuario
    ){
        let [configuracion, _] = await database.execute(`CALL sp_set_configuracion (
            '${id_grupo}', 
            '${id_usuario}'
        );`);
        return configuracion;
    }
}

module.exports = configuracionModel;