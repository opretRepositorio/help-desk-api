const ticketModel = require('../models/ticketModel');

exports.GetTickets = async (req, res, next) => {
    try {
        let tickets = new ticketModel();
        const result = await tickets.GetTickets();
        console.log(result);
        res.status(200).send({ tickets: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketById = async (req, res, next) => {
    try {
        let { id_ticket } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketById(id_ticket);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByIdCliente = async (req, res, next) => {
    try {
        let { id_cliente } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByIdCliente(id_cliente);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByEstadoAndIdAgente = async (req, res, next) => {
    try {
        let { estado, id_agente } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByEstadoAndIdAgente(estado, id_agente);
        console.log(result[0]);
        res.status(200).send({ ticket: result[0] });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByIdAgente = async (req, res, next) => {
    try {
        let { id_agente } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByIdAgente(id_agente);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByIdAveria = async (req, res, next) => {
    try {
        let { id_averia } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByIdAveria(id_averia);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByIdGrupo = async (req, res, next) => {
    try {
        let { id_grupo } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByIdGrupo(id_grupo);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByFechaCreacion = async (req, res, next) => {
    try {
        let { fecha } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByFechaCreacion(fecha);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByFechaAsignacion = async (req, res, next) => {
    try {
        let { fecha } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByFechaAsignacion(fecha);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByFechaResolucion = async (req, res, next) => {
    try {
        let { fecha } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByFechaResolucion(fecha);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.GetTicketByTicketPrioridad = async (req, res, next) => {
    try {
        let { prioridad } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.GetTicketByTicketPrioridad(prioridad);
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.SetTicket = async (req, res, next) => {
    try {
        let { 
            ticket_descripcion, 
            id_cliente, 
            ticket_tipo, 
            ticket_estado, 
            ticket_prioridad, 
            id_grupo, 
            // id_agente, 
            // ticket_fecha_creacion, 
            // ticket_fecha_asignado, 
            // ticket_fecha_resolucion, 
            ticket_asunto, 
            id_averia, 
            ticket_programa, 
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
            // id_agente, 
            // ticket_fecha_creacion, 
            // ticket_fecha_asignado, 
            // ticket_fecha_resolucion, 
            ticket_asunto, 
            id_averia, 
            ticket_programa, 
            ticket_titulo
        );
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}

exports.UpdateTicket = async (req, res, next) => {
    try {
        let { 
            id_ticket,
            //ticket_descripcion, 
            ticket_tipo, 
            ticket_estado, 
            ticket_prioridad, 
            id_grupo, 
            id_agente, 
            // id_cliente,
            // ticket_fecha_creacion,
            ticket_fecha_asignado, 
            ticket_fecha_resolucion, 
            // ticket_asunto 
        } = req.body;
        let ticket = new ticketModel();
        const result = await ticket.UpdateTicket(
            id_ticket,
           // ticket_descripcion, 
            ticket_tipo, 
            ticket_estado, 
            ticket_prioridad, 
            id_grupo, 
            id_agente, 
            // id_cliente,
            // ticket_fecha_creacion,
            ticket_fecha_asignado, 
            ticket_fecha_resolucion, 
            // ticket_asunto
        );
        console.log(result);
        res.status(200).send({ ticket: result });
    } catch (error) {
        console.error(error);
        res.status(500).send(
        { 
            error: 'Internal Server Error', 
            message: error 
        });
    }
}
