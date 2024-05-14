const chatModel = require('../models/chatModel');

exports.GetChatById = async (req, res, next) => {
    try {
        let { id_chat } = req.body;
        let chat = new chatModel();
        const result = await chat.GetChatById(id_chat);
        console.log(result);
        res.status(200).send({ chat: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

// exports.GetChatByIdMensaje = async (req, res, next) => {
//     try {
//         let { id_mensaje } = req.body;
//         let chat = new chatModel();
//         const result = await chat.GetChatByIdMensaje(id_mensaje);
//         console.log(result);
//         res.status(201).send({ chat: result });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: 'Internal Server Error' });
//     }
// }

exports.SetChat = async (req, res, next) => {
    try {
        let { id_mensaje } = req.body;
        let chat = new chatModel();
        const result = await chat.SetChat(
            id_mensaje
        );
        console.log(result);
        res.status(200).send({ chat: result });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
