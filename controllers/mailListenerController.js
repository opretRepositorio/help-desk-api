const Imap = require('imap');
const { simpleParser } = require('mailparser');

const imapConfig = {
    user: 'helpdeskopret@gmail.com',
    password: 'pbrkhgoccjnsphks',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
};

exports.MailListener = async (req, res, next) => {
    const unseenMessages = [];

    try {
        const imap = new Imap(imapConfig);

        imap.once('ready', () => {
            imap.openBox('INBOX', true, (err, box) => {
                if (err) {
                    console.error('Error opening INBOX:', err);
                    return res.status(500).json({ error: 'An error occurred while opening INBOX' });
                }

                imap.search(['UNSEEN'], (err, results) => {
                    if (err) {
                        console.error('Error searching UNSEEN messages:', err);
                        imap.end();
                        return res.status(500).json({ error: 'An error occurred while searching UNSEEN messages' });
                    }

                    if (results.length === 0) {
                        imap.end();
                        return res.json([]);
                    }

                    const fetch = imap.fetch(results, { bodies: '', markSeen: true });

                    fetch.on('message', (msg, seqno) => {
                        const email = {};

                        msg.on('body', async (stream, info) => {
                            try {
                                const parsed = await simpleParser(stream);
                                email.from = parsed.from.text;
                                email.subject = parsed.subject;
                                email.date = parsed.date;
                                email.text = parsed.text;
                                unseenMessages.push(email);
                            } catch (parseError) {
                                console.error('Error parsing email:', parseError);
                                return res.status(500).json({ error: 'An error occurred while parsing emails' });
                            }
                        });
                    });

                    fetch.once('error', (fetchError) => {
                        console.error('Fetch error:', fetchError);
                        imap.end();
                        return res.status(500).json({ error: 'An error occurred while fetching emails' });
                    });

                    fetch.once('end', () => {
                        imap.end();
                        return res.json(unseenMessages);
                    });
                });
            });
        });

        imap.once('error', (imapError) => {
            console.error('IMAP error:', imapError);
            return res.status(500).json({ error: 'An error occurred while connecting to IMAP server' });
        });

        imap.once('end', () => {
            console.log('Connection ended');
            return res.json(unseenMessages);
        });

        imap.connect();
    } catch (ex) {
        console.error('An unexpected error occurred:', ex);
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};
