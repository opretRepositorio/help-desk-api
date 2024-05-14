const database = require('../config/database')

class notaModel {
    constructor (){}

    // Obtiene nota del ticket por id_nota
    async GetNotaById(id_nota){
        let [nota, _] = await database.execute(`CALL sp_get_nota_by_id(${id_nota});`);
        return nota;
    }

    // Obtiene grupo por id_usuario
    async GetNotaByIdUsuario(id_usuario){
        let [nota, _] = await database.execute(`CALL sp_get_nota_by_id_usuario ('${id_usuario}');`);
        return nota;
    }

    // Obtiene nota por id_ticket
    // async GetNotaByIdTicket(id_ticket){
    //     let [nota, _] = await database.execute(`CALL sp_get_nota_by_id_ticket ('${id_ticket}');`);
    //     return nota;
    // }

    // Obtiene grupo por nota_fecha
    async GetNotaByNotaFecha(nota_fecha){
        let [nota, _] = await database.execute(`CALL sp_get_nota_by_nota_fecha ('${nota_fecha}');`);
        return nota;
    }

    // Obtiene grupo por nombre
    async GetNotaByNotaEstado(nota_estado){
        let [nota, _] = await database.execute(`CALL sp_get_nota_by_nota_estado ('${nota_estado}');`);
        return nota;
    }

    // Inserta o registra a la base de datos una nueva nota relacionado al ticket
    async SetNota(
        // id_nota
        id_usuario,
        id_ticket,
        nota_descripcion,
        nota_fecha,
        nota_estado
    ){
        let [nota, _] = await database.execute(`CALL sp_set_nota (
            '${id_usuario}', 
            '${id_ticket}', 
            '${nota_descripcion}',
            '${nota_fecha}', 
            '${nota_estado}'
        );`);
        return nota;
    }
}

module.exports = notaModel;