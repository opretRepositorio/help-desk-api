const chatModel = require('../models/chatModel')

exports.GetChatById = async (req, res, next) => {
    let { id_chat } = req.body;
    let chat = new chatModel();
    const result = await chat.GetChatById(id_chat);
    console.log(result);

    res.status(200).send( { chat: result } );
}

// exports.GetChatByIdMensaje = async (req, res, next) => {
//     let { id_mensaje } = req.body;
//     let chat = new chatModel();
//     const result = await chat.GetChatByIdMensaje(id_mensaje);
//     console.log(result);

//     res.status(201).send( { chat: result } );
// }

exports.SetChat = async (req, res, next) => {
    let { 
        // id_mensaje
    } = req.body;
    let chat = new chatModel();
    const result = await chat.SetChat(
        // id_mensaje
    );
    console.log(result);

    res.status(200).send( { chat: result } );
}