
//Services
const messageService = require('./services/messageService');
const apiService = require('./services/apiService');

function init(io, socket){
    socket.on('send-message', (message, room) => {
        messageService.createMessage(message)
            .then(savedMsg => {
                return messageService.getMessageById(savedMsg._id)
            }).then(populatedMsg => {
                if (room == '') socket.broadcast.emit('broadcast-message', populatedMsg);
                else socket.to(room).emit('broadcast-message', populatedMsg);

                // Update the chatroom
                apiService.addChatroomMessage(populatedMsg.author._id, populatedMsg.chatroom)
            }).catch(errorHandler);
    });

    socket.on('join-room', (msg, room) => {
        socket.join(room);
    });

    socket.on('leave-room', (msg, room) => {
        socket.leave(room);
    });
}

function errorHandler(err){
    console.log("Error in socket IO:", err);
}

module.exports = {
    init,
}