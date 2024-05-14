const database = require('../config/database')

class chatModel {
    constructor (){}

    // Obtiene chat por id_chat
    async GetChatById(id_chat){
        let [chat, _] = await database.execute(`CALL sp_get_chat_by_id(${id_chat});`);
        return chat;
    }

    // Obtiene un chat por id_mensaje
    // async GetChatByIdMensaje(id_mensaje){
    //     let [chat, _] = await database.execute(`CALL sp_get_chat_by_id_mensaje (${id_mensaje});`);
    //     return chat;
    // }

    // Inserta o registra a la base de datos un nuevo chat al sistema
    async SetChat(
        // id_chat
        // id_mensaje
    ){
        let [chat, _] = await database.execute(`CALL sp_set_chat ();`);
        return chat;
    }
}

module.exports = chatModel;