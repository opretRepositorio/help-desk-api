const database = require('../config/database')

class grupoModel {
    constructor (){}

    // Todos los grupos del sistema
    async GetGrupos(){
        let [grupos, _] = await database.execute('CALL sp_get_grupos();');
        return grupos;
    }

    // Obtiene un grupo por id
    async GetGrupoById(id_grupo){
        let [grupo, _] = await database.execute(`CALL sp_get_grupo_by_id (${id_grupo});`);
        return grupo;
    }

    // Obtiene grupo por nombre
    async GetGrupoByNombre(grupo_nombre){
        let [grupo, _] = await database.execute(`CALL sp_get_grupo_by_nombre ('${grupo_nombre}');`);
        return grupo;
    }

    // Inserta o registra a la base de datos un nuevo grupo al sistema
    async SetGrupo(
        // id_grupo
        grupo_nombre,
        grupo_correo_notificacion,
        grupo_telefono_notificacion
    ){
        let [grupo, _] = await database.execute(`CALL sp_set_grupo (
            '${grupo_nombre}', 
            '${grupo_correo_notificacion}', 
            '${grupo_telefono_notificacion}'
        );`);
        return grupo;
    }
}

module.exports = grupoModel;