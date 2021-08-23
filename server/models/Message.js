const mongoose = require('mongoose');

const User = require('./User');
const Chatroom = require('./Chatroom');

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    author: [{
        type: mongoose.Types.ObjectId,
        ref: User
    }],

    chatroom: [{
        type: mongoose.Types.ObjectId,
        ref: Chatroom
    }],

    created_at: {
        type: String,
        default: Date.now
    },
});

module.exports = mongoose.model("Message", MessageSchema);