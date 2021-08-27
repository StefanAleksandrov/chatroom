const Chatroom = require('../models/Chatroom');
const Message = require('../models/Message');
const User = require('../models/User');

const auth = {
    createChatroom(name, description, image, creator){
        let newChatroom = new Chatroom({ name, description, image, creator, members: [creator] });
        return newChatroom.save();
    },

    updateChatroom(name, description, image, chatroom_id){
        return Chatroom.findById(chatroom_id)
            .then(chatroom => {
                return chatroom.updateOne({name, description, image});
            });
    },

    getChatrooms() {
        // Get all results
        return Chatroom.find().lean();
    },

    getChatroomsByName(criteria){
        // Get filtered results
        return Chatroom.find({ name: { $regex: criteria, $options: "i" } }, function(err, docs) {
            return docs;
        }).lean();
    },

    getMyChatrooms(user_id){
        // Get filtered results
        return Chatroom.find({ members: {$elemMatch: {$ref: 'User', $id: user_id}}}).lean();
    },

    getChatroomByName(name){
        return Chatroom.findOne({name}).lean();
    },

    getChatroomById(_id){
        return Chatroom.findOne({_id}).lean();
    },

    getMessagesPerChatroomId(chatroom){
        return Chatroom.find({chatroom}).lean();
    },

    addChatroomMember(user_id, chatroom_id){
        return Chatroom.findById(chatroom_id)
                        .then(chatroom => {
                            return chatroom.updateOne({members: [...chatroom.members, user_id]});
                        });
    },

    addChatroomMessage(message_id, chatroom_id){
        return Chatroom.findById(chatroom_id)
                        .then(chatroom => {
                            return chatroom.updateOne({messages: [...chatroom.messages, message_id]});
                        });
    },

    removeChatroomMember(user_id, chatroom_id){
        return Chatroom.findById(chatroom_id)
                        .then(chatroom => {
                            const index = Number(chatroom.members.indexOf(user_id));
                            chatroom.members.splice(index, 1);
                            return chatroom.updateOne({members: [...chatroom.members]});
                        });
    },

    deleteChatroom(chatroom_id){
        return Chatroom.deleteOne(chatroom_id);
    }
}

module.exports = auth;