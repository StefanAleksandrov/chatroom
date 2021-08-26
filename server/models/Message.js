const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    chatroom: {
        type: String,
        required: true
    },

    created_at: {
        type: String,
        default: Date.now
    },
});

module.exports = mongoose.model("Message", MessageSchema);