const database = require('../config/database')

class arhcivoModel {
    constructor (){}

    // Obtiene un archivo de la DATABASE
    async GetArchivoById(id_archivo){
        let [archivo, _] = await database.execute(`CALL sp_get_archivo_by_id('${id_archivo}');`);
        return archivo;
    }

    // Obtiene un archivo de la DATABASE por id_ticket
    async GetArchivoByIdTicket(id_ticket){
        let [archivo, _] = await database.execute(`CALL sp_get_archivo_by_id_ticket('${id_ticket}');`);
        return archivo;
    }

    // Obtiene un archivo de la DATABASE por id_respuesta
    async GetArchivoByIdRespuesta(id_respuesta){
        let [archivo, _] = await database.execute(`CALL sp_get_archivo_by_id_respuesta('${id_respuesta}');`);
        return archivo;
    }

    // Obtiene un archivo de la DATABASE por id_mensaje
    async GetArchivoByIdMensaje(id_mensaje){
        let [archivo, _] = await database.execute(`CALL sp_get_archivo_by_id_mensaje('${id_mensaje}');`);
        return archivo;
    }

    // Inserta un archivo de la DATABASE por archivo, id_ticket o id_respuesta o id_mensaje
    async SetArchivo(_archivo, id_ticket, id_respuesta, id_mensaje){
        let [archivo, _] = await database.execute(`CALL sp_set_archivo(
            '${_archivo}',
            '${id_ticket}',
            '${id_respuesta}',
            '${id_mensaje}'
            );`);
        return archivo;
    }
}

module.exports = arhcivoModel;