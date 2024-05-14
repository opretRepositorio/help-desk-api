const database = require('../config/database')

class mensajeModel {
    constructor (){}

    // Obtiene mensaje del ticket por id_mensaje
    async GetMensajeById(id_mensaje){
        let [mensaje, _] = await database.execute(`CALL sp_get_mensaje_by_id (${id_mensaje});`);
        return mensaje;
    }

    // Obtiene mensaje del ticket por id_chat
    async GetMensajeByIdChat(id_chat){
        let [mensaje, _] = await database.execute(`CALL sp_get_mensaje_by_id_chat (${id_chat});`);
        return mensaje;
    }

    // Obtiene mensaje del ticket por hora
    async GetMensajeByHora(hora){
        let [mensaje, _] = await database.execute(`CALL sp_get_mensaje_by_hora ('${hora}');`);
        return mensaje;
    }

    // Obtiene mensaje por mensaje
    async GetMensajeByMensaje(mensaje){
        let [_mensaje, _] = await database.execute(`CALL sp_get_mensaje_by_mensaje ('${mensaje}');`);
        return _mensaje;
    }

    // Obtiene mensaje por visto
    async GetMensajeVisto(visto){
        let [mensaje, _] = await database.execute(`CALL sp_get_mensaje_by_visto ('${visto}');`);
        return mensaje;
    }

    // Inserta o registra a la base de datos un mensaje relacionado al ticket
    async SetMensaje(
        // id_mensaje
        id_chat,
        mensaje,
        hora,
        visto
    ){
        let [_mensaje, _] = await database.execute(`CALL sp_set_mensaje (
            '${id_chat}', 
            '${mensaje}', 
            '${hora}',
            ${visto}
        );`);
        return _mensaje;
    }

    // Actualiza el estado del mensaje 'visto' o 'no visto' por visto
    async UpdateMensajeVisto(
        visto,
        id_mensaje
    ){
        let [mensaje, _] = await database.execute(`CALL sp_update_mensaje_visto (
            ${visto},
            '${id_mensaje}'
        );`);
        return mensaje;
    }
}

module.exports = mensajeModel;