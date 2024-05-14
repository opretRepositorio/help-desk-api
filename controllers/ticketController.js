const ticketModel = require('../models/ticketModel')

exports.GetTickets = async (req, res, next) => {
    let tickets = new ticketModel();
    const result = await tickets.GetTickets();
    console.log(result);

    res.status(200).send( { tickets: result } );
}

exports.GetTicketById = async (req, res, next) => {
    let {
        id_ticket
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketById(id_ticket);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByIdCliente = async (req, res, next) => {
    let {
        id_cliente
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByIdCliente(id_cliente);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByEstadoAndIdAgente = async (req, res, next) => {
    let {
        estado,
        id_agente
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByEstadoAndIdAgente(estado, id_agente);
    console.log(result[0]);

    res.status(200).send( { ticket: result[0] } );
}

exports.GetTicketByIdAgente = async (req, res, next) => {
    let {
        id_agente
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByIdAgente(id_agente);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByIdAveria = async (req, res, next) => {
    let {
        id_averia
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByIdAveria(id_averia);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByIdGrupo = async (req, res, next) => {
    let {
        id_grupo
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByIdGrupo(id_grupo);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByFechaCreacion = async (req, res, next) => {
    let {
        fecha
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByFechaCreacion(fecha);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByFechaAsignacion = async (req, res, next) => {
    let {
        fecha
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByFechaAsignacion(fecha);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByFechaResolucion = async (req, res, next) => {
    let {
        fecha
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByFechaResolucion(fecha);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.GetTicketByTicketPrioridad = async (req, res, next) => {
    let {
        prioridad
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.GetTicketByTicketPrioridad(prioridad);
    console.log(result);

    res.status(200).send( { ticket: result } );
}

exports.SetTicket = async (req, res, next) => {
    let {
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
    } = req.body;

    let ticket = new ticketModel();
    const result = await ticket.SetTicket(
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
    );
    console.log(result);

    res.status(200).send( { ticket: result } );
}