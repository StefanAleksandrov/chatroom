// Models
const Message = require('../models/Message');

const auth = {
    createMessage(message){
        if (message._id == '') delete message._id;
        let newMessage = new Message(message);
        return newMessage.save();
    },

    getAllMessages(room){
        return Message.find({chatroom: room});
    }
}

module.exports = auth;