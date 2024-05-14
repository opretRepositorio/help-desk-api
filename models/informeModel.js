const database = require('../config/database')

class informeModel {
    constructor (){}

    // Obtiene informe por id_informe
    async GetInformeById(id_informe){
        let [informe, _] = await database.execute(`CALL sp_get_informe_by_id(${id_informe});`);
        return informe;
    }

    // Obtiene informes
    async GetInformes(){
        let [informe, _] = await database.execute('CALL sp_get_informes ();');
        return informe;
    }

    // Obtiene nota por id_ticket
    async GetInformeByIdTicket(id_ticket){
        let [informe, _] = await database.execute(`CALL sp_get_informe_by_id_ticket ('${id_ticket}');`);
        return informe;
    }

    // Obtiene grupo por nota_fecha
    async GetInformeByIdUsuario(id_usuario){
        let [informe, _] = await database.execute(`CALL sp_get_informe_by_id_usuario ('${id_usuario}');`);
        return informe;
    }

    // Obtiene grupo por nombre
    async GetInformeByFecha(fecha){
        let [informe, _] = await database.execute(`CALL sp_get_informe_by_fecha ('${fecha}');`);
        return informe;9
    }

    // Inserta o registra a la base de datos una nueva nota relacionado al ticket
    async SetInforme(
        // id_informe
        id_usuario,
        id_ticket,
        fecha
    ){
        let [informe, _] = await database.execute(`CALL sp_set_informe  (
            '${id_ticket}', 
            '${id_usuario}',
            '${fecha}'
        );`);
        return informe;
    }
}

module.exports = informeModel;