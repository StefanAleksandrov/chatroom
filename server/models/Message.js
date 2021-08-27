const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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