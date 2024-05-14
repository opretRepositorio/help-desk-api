const database = require('../config/database')

class respuestaModel {
    constructor (){}

    // Obtiene una respuesta por id_respuesta
    async GetRespuestaById(id_respuesta){
        let [respuesta, _] = await database.execute(`CALL sp_get_respuesta_by_id(${id_respuesta});`);
        return respuesta;
    }

    // Obtiene una respuesta por id_usuario
    async GetRespuestaByIdUsuario(id_usuario){
        let [respuesta, _] = await database.execute(`CALL sp_get_respuesta_by_id_usuario(${id_usuario});`);
        return respuesta;
    }

    // Obtiene una respuesta por id_ticket
    async GetRespuestaByIdTicket(id_ticket){
        let [respuesta, _] = await database.execute(`CALL sp_get_respuesta_by_id_ticket(${id_ticket});`);
        return respuesta;
    }

    // Obtiene una respuesta por fecha
    async GetRespuestaByFecha(fecha){
        let [respuesta, _] = await database.execute(`CALL sp_get_respuesta_by_fecha('${fecha}');`);
        return respuesta;
    }

    // Inserta o registra a la base de datos un nuevo usuario al sistema
    async SetRespuesta(
        // id_respuesta
        id_usuario,
        id_ticket,
        respuesta_descripcion,
        respuesta_fecha,
        respuesta_asunto
    ){
        let [respuesta, _] = await database.execute(`CALL sp_set_respuesta (
            '${id_usuario}', 
            '${id_ticket}', 
            '${respuesta_descripcion}', 
            '${respuesta_fecha}', 
            '${respuesta_asunto}'
        );`);
        return respuesta;
    }
}

module.exports = respuestaModel;