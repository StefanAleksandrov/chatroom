// Models
const Message = require('../models/Message');

const auth = {
    createMessage(message){
        if (message._id == '') delete message._id;
        let newMessage = new Message(message);
        return newMessage.save();
    },

    getAllMessages(room){
        return Message.find({chatroom: room}).populate('author').lean();
    },

    getMessageById(_id){
        return Message.findOne({_id}).populate('author').lean();
    }
}

module.exports = auth;