const Imap = require('imap');
const { simpleParser } = require('mailparser');
const ticketModel = require('../models/ticketModel');
const adminModel = require('../models/adminModel');
const userModel = require('../models/userModel');

const imapConfig = {
    user: 'helpdeskopret@gmail.com',
    password: 'pbrkhgoccjnsphks',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
};

// Contralador para obtener mensajes no leido del correo "helpdeskopret@gmail.com"
exports.MailListener = async (req, res, next) => {
    try {
        const imap = new Imap(imapConfig);
        const unseenMessages = []; // Array para almacenar la información de los mensajes no leídos

        function openInbox(cb) {
            imap.openBox('INBOX', false, cb);
        }

        imap.once('ready', () => {
            openInbox((err, box) => {
                if (err) throw err;
                imap.search(['UNSEEN'], (err, results) => {
                    if (err) throw err;

                    if (results.length === 0) {
                        // No hay mensajes no leídos encontrados, finalizar la conexión IMAP y enviar una respuesta vacía
                        imap.end();
                        res.json([]);
                        return;
                    }

                    const fetch = imap.fetch(results, { bodies: '', markSeen: true });

                    fetch.on('message', (msg, seqno) => {
                        const email = {}; // Objeto para almacenar la información de cada correo electrónico

                        msg.once('attributes', (attrs) => {
                            email.uid = attrs.uid; // Almacenar el UID del mensaje en el objeto email
                        });
                        msg.on('body', async (stream, info) => {
                            const parsed = await simpleParser(stream);

                            email.from = parsed.from.text;
                            email.subject = parsed.subject;
                            email.date = parsed.date;
                            email.text = parsed.text;
                            //email.html = parsed.html;
                            //email.attachments = parsed.attachments;
                            unseenMessages.push(email); // Agregar el correo electrónico al array de mensajes no leídos
                        });
                    });

                    fetch.once('error', (err) => {
                        console.error('Fetch error:', err);
                        res.status(500).json({ error: 'An error occurred while fetching emails' });
                    });

                    fetch.once('end', () => {
                        imap.end(); // Finalizar la conexión IMAP

                    });
                });
            });
        });

        imap.once('error', (err) => {
            console.error('IMAP error:', err);
            res.status(500).json({ error: 'An error occurred while processing your request' });
        });

        imap.once('end', () => {
            console.log(unseenMessages);
            res.json(unseenMessages);  // Enviar los mensajes no leídos como respuesta JSON
            console.log('Connection ended');

            let ticket = new ticketModel();
            let admin = new adminModel();
            let user = new userModel();

            unseenMessages.forEach(item => {
                if (admin.SetUser(
                    item.from.split("\" \<")[0].replace('\"', '\0'), // usuario_nombre
                    item.from.split("\" \<")[1].replace('\>', '\0'), // usuario_codigo
                    item.from.split("\" \<")[1].replace('\>', '\0'), // usuario_correo
                    // usuario_password,
                    ' ', // usuario_telefono
                    ' ', // usuario_celular
                    ' ', // usuario_cargo
                    'usuario'
                ).affectedRows > 0)
                {
                    const result = user.GetUserByCodigo(item.from.split("\" \<")[1].replace('\>', '\0'));

                    ticket.SetTicket(
                        item.text, 
                        result.idusuario, 
                        'Averia', 
                        'Abierto', 
                        'Baja', 
                        1, 
                        // id_agente, 
                        // ticket_fecha_asignado, 
                        // ticket_fecha_resolucion, 
                        item.subject, 
                        // id_averia, 
                        // ticket_programa, 
                        item.subject
                    );
                }
                else {

                }
            });
        });

        imap.connect(); // Conectar al servidor IMAP
    } catch (ex) {
        console.log('An error occurred:', ex);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};
