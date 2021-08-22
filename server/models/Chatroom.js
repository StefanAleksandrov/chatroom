const mongoose = require('mongoose');

const User = require('./User');
const Message = require('./Message');

const ChatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, "The name should be at least 4 characters long."]
    },

    description: {
        type: String,
        required: true,
        minlength: [10, "The name should be at least 10 characters long."]
    },

    image: {
        type: String,
        required: true
    },

    members: [{
        type: mongoose.Types.ObjectId,
        ref: User
    }],

    messages: [{
        type: mongoose.Types.ObjectId,
        ref: Message,
    }],

    created_at: {
        type: String,
        default: new Date().toDateString(),
    },
});

module.exports = mongoose.model("Chatroom", ChatroomSchema);