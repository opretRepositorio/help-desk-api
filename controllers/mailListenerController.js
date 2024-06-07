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

// Controlador para obtener mensajes no leido del correo "helpdeskopret@gmail.com"
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
                        return res.status(500).json({ error: 'An error occurred while fetching emails' });
                    });

                    fetch.once('end', () => {
                        imap.end(); // Finalizar la conexión IMAP
                    });
                });
            });
        });

        imap.once('error', (err) => {
            console.error('IMAP error:', err);
            return res.status(500).json({ error: 'An error occurred while processing your request' });
        });

        imap.once('end', async () => {
            console.log(unseenMessages);
            res.json(unseenMessages);  // Enviar los mensajes no leídos como respuesta JSON
            console.log('Connection ended');

            let ticket = new ticketModel();
            let admin = new adminModel();
            let user = new userModel();

            // Para que esto funcione no deben de haber mas de un registro de un mismo correo electronico en la base de datos
            await Promise.all(unseenMessages.map(async (item) => {
                const usuario_nombre = item.from.split("\" <")[0].replace('\"', '\0');
                const usuario_codigo_correo = item.from.split("\" <")[1].replace('>', '\0');
                
                const setUserResult = await admin.SetUser(
                    usuario_nombre,
                    usuario_codigo_correo, // usuario_codigo
                    usuario_codigo_correo,
                    'usuario', // usuario_tipo
                    ' ', // usuario_telefono
                    ' ', // usuario_celular
                    ' ', // usuario_cargo
                    'usuario'
                );

                console.log(setUserResult.affectedRows > 0 ? 'if' : 'else');
                console.log(usuario_codigo_correo);

                const result = await user.GetUserByCorreo(usuario_codigo_correo);
                console.log(result[0][0]);

                // (
                //     // id_ticket
                //     ticket_descripcion,
                //     id_cliente,
                //     ticket_tipo,
                //     ticket_estado,
                //     ticket_prioridad,
                //     id_grupo,
                //     ticket_asunto,
                //     id_averia,
                //     ticket_programa,
                //     // id_chat,
                //     ticket_titulo
                // )

                await ticket.SetTicket(
                    item.text, 
                    result[0][0].idusuario, 
                    'Averia', 
                    'Abierto', 
                    'Baja', 
                    1, 
                    item.subject, 
                    1,
                    'N/A',
                    item.subject
                );
            }));
        });

        imap.connect(); // Conectar al servidor IMAP
    } catch (ex) {
        console.log('An error occurred:', ex);
        return res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};
