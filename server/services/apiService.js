const Chatroom = require('../models/Chatroom');
const User = require('../models/User');

const auth = {
    createChatroom(name, description, image, creator) {
        let newChatroom = new Chatroom({ name, description, image, creator, members: [creator] });
        return newChatroom.save();
    },

    getChatrooms() {
        // Get all results
        return Chatroom.find().lean();
    },

    getChatroomsByName(criteria) {
        // Get filtered results
        return Chatroom.find({ name: { $regex: criteria, $options: "i" } }, function(err, docs) {
            return docs;
        });
    },

    getMyChatrooms(user_id) {
        // Get filtered results
        return Chatroom.find({ members: {$elemMatch: {$ref: 'User', $id: user_id}}});
    },

    getChatroomByName(name){
        return Chatroom.findOne({name});
    },

    getChatroomById(_id) {
        return Chatroom.findOne({_id});
    }
}

module.exports = auth;