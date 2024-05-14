const database = require('../config/database')

class ticketModel {
    constructor (){}

    // Todos los tickets del sistema
    async GetTickets(){
        let [tickets, _] = await database.execute('CALL sp_get_tickets();');
        return tickets;
    }

    // Obtiene un ticket por id_ticket
    async GetTicketById(id_ticket){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_id(${id_ticket});`);
        return ticket;
    }

    // Obtiene un ticket por id_cliente
    async GetTicketByIdCliente(id_cliente){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_cliente(${id_cliente});`);
        return ticket;
    }

    // Obtiene un ticket por estado y id_agente
    async GetTicketByEstadoAndIdAgente(estado, id_agente){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_estado_and_id_agente('${estado}', ${id_agente});`);
        return ticket;
    }

    // Obtiene un ticket por id_agente
    async GetTicketByIdAgente(id_agente){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_id_agente(${id_agente});`);
        return ticket;
    }

    // Obtiene un ticket por id_averia
    async GetTicketByIdAveria(id_averia){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_id_averia(${id_averia});`);
        return ticket;
    }

    // Obtiene un ticket por id_grupo
    async GetTicketByIdGrupo(id_grupo){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_id_grupo(${id_grupo});`);
        return ticket;
    }

    // Obtiene un ticket por fecha
    async GetTicketByFechaCreacion(fecha){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_fecha_creacion('${fecha}');`);
        return ticket;
    }

    // Obtiene un ticket por fecha
    async GetTicketByFechaAsignacion(fecha){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_fecha_asignado('${fecha}');`);
        return ticket;
    }

    // Obtiene un ticket por fecha
    async GetTicketByFechaResolucion(fecha){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_fecha_resolucion('${fecha}');`);
        return ticket;
    }

    // Obtiene un ticket por id_prioridad
    async GetTicketByTicketPrioridad(id_prioridad){
        let [ticket, _] = await database.execute(`CALL sp_get_ticket_by_prioridad('${id_prioridad}');`);
        return ticket;
    }

    // Inserta o registra a la base de datos un nuevo usuario al sistema
    async SetTicket(
        // id_ticket
        ticket_descripcion,
        id_cliente,
        ticket_tipo,
        ticket_estado,
        ticket_prioridad,
        id_grupo,
        id_agente,
        ticket_fecha_creacion,
        ticket_fecha_asignado,
        ticket_fecha_resolucion,
        ticket_asunto,
        id_averia,
        ticket_programa,
        // id_chat,
        ticket_titulo
    ){
        let [ticket, _] = await database.execute(`CALL sp_set_ticket (
            '${ticket_descripcion}', 
            '${id_cliente}', 
            '${ticket_tipo}', 
            '${ticket_estado}', 
            '${ticket_prioridad}', 
            '${id_grupo}', 
            '${id_agente}', 
            '${ticket_fecha_creacion}', 
            '${ticket_fecha_asignado}', 
            '${ticket_fecha_resolucion}', 
            '${ticket_asunto}',
            '${id_averia}', 
            '${ticket_programa}',
            '${ticket_titulo}'
        );`);
        return ticket;
    }
}

module.exports = ticketModel;