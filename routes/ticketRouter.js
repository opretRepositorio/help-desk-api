const express = require('express');
const ticket_controller = require('../controllers/ticketController');
const ticket_router = express.Router();

// Router obtiene todos los tickets con GET
ticket_router.route("/get_tickets").get(ticket_controller.GetTickets);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_id").post(ticket_controller.GetTicketById);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_id_cliente").post(ticket_controller.GetTicketByIdCliente);

// Router obtiene todos los tickets con POST
ticket_router.route("/get_ticket/by_estado_and_id_agente").post(ticket_controller.GetTicketByEstadoAndIdAgente);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_id_agente").post(ticket_controller.GetTicketByIdAgente);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_id_averia").post(ticket_controller.GetTicketByIdAveria);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_id_grupo").post(ticket_controller.GetTicketByIdGrupo);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_fecha_creacion").post(ticket_controller.GetTicketByFechaCreacion);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_fecha_asignacion").post(ticket_controller.GetTicketByFechaAsignacion);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_fecha_resolucion").post(ticket_controller.GetTicketByFechaResolucion);

// Router obtiene todos los tickets con GET
ticket_router.route("/get_ticket/by_ticket_prioridad").post(ticket_controller.GetTicketByTicketPrioridad);

// Router registra un ticket al sistema
ticket_router.route("/set_ticket").post(ticket_controller.SetTicket);

// module para exportar ticket_router, acceso publico a otros modulos 
module.exports = ticket_router;