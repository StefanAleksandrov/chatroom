
//Services
const messageService = require('./services/messageService');
const apiService = require('./services/apiService');

function init(io, socket){
    socket.on('send-message', (message, room) => {
        messageService.createMessage(message)
            .then(msg => {
                console.log(room);
                if (room == '') socket.broadcast.emit('broadcast-message', msg);
                else socket.to(room).emit('broadcast-message', msg);

                // Update the chatroom
                apiService.addChatroomMessage(msg.author, msg.chatroom)
            }).catch(errorHandler);
    })

    socket.on('get-all-messages', (msg, room) => {
        messageService.getAllMessages(room)
            .then((messages) => {
                // console.log(room, room != '', messages);
                if (room != '') {
                    console.log("HERE");
                    messages.map(msg => {
                        console.log("THERE");
                        socket.to(room).emit('broadcast-message', msg);
                    });
                }
            }).catch(errorHandler);
    });

    socket.on('join-room', (msg, room) => {
        console.log("Join room:", room);
        socket.join(room);
    });
}

function errorHandler(err){
    console.log("Error in socket IO:", err);
}

module.exports = {
    init,
}