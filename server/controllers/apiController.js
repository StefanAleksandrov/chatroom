const router = require('express').Router();

//Services
const apiService = require('../services/apiService');
const authService = require('../services/authService');

//Middlewares

//GET
router.get('/chatrooms', (req, res, next) => {
    const criteria = req.query.criteria;
    const chatroom_id = req.query.id;

    if (criteria && criteria.length > 0 && typeof criteria == 'string') {
        apiService.getChatroomsByName(criteria)
            .then(chatrooms => {
                res.json({ chatrooms });
            }).catch(next);

    } else if (chatroom_id){
        apiService.getChatroomById(chatroom_id)
            .then(chatroom => {
                res.status(200).json(chatroom);
            }).catch(next);

    } else {
        apiService.getChatrooms()
            .then(chatrooms => {
                res.json({ chatrooms });
            }).catch(next);
    }
});

router.get('/messages', (req, res, next) => {
    const chatroom_id = req.query.id;

    if (chatroom_id){
        apiService.getMessagesPerChatroomId(chatroom_id)
            .then(messages => {
                res.status(200).json(messages);
            }).catch(next);

    } else {
        res.status(404).json({ message: "Please provide all required information!" })
    }
});

//POST
router.post('/chatrooms/create', (req, res, next) => {
    const { name, description, image, creator } = req.body;
    if (!name || !description || !image || !creator) res.status(404).json({ "message": "Please provide all required information" });

    apiService.getChatroomByName(name)
        .then(chatroom => {
            //Check if user with this email already exists and if so return error
            if (chatroom) throw ({ message: "Chatroom already exists", status: 409 });
            //Else attempt to create new user
            else return apiService.createChatroom(name, description, image, creator);
        })
        .then(chatroom => {
            authService.addUserChatroom(creator, chatroom._id);
            res.status(201).json({ message: "success", chatroom }).send();
        })
        .catch(next);
});

router.post('/chatrooms/update', (req, res, next) => {
    const { name, description, image, chatroom_id } = req.body;
    apiService.updateChatroom(name, description, image, chatroom_id)
        .then(() => {
            res.status(200).json({ message: "ok" });
        }).catch(next);
});

router.post('/chatrooms/join', (req, res, next) => {
    const { user_id, chatroom_id } = req.body;
    
    authService.addUserChatroom(user_id, chatroom_id)
        .then(() => {
            return apiService.addChatroomMember(user_id, chatroom_id);
        }).then(() => {
            res.status(200).json({message: "ok"}).send();
        }).catch(next);
});

router.post('/chatrooms/leave', (req, res, next) => {
    const { user_id, chatroom_id } = req.body;
    
    authService.removeUserChatroom(user_id, chatroom_id)
        .then(() => {
            return apiService.removeChatroomMember(user_id, chatroom_id);
        }).then(() => {
            res.status(200).json({message: "ok"}).send();
        }).catch(next);
});

//DELETE
router.delete('/chatrooms/delete', (req, res, next) => {
    const chatroom_id = req.query.id;
    
    apiService.deleteChatroom({"_id": chatroom_id})
        .then(() => {
            res.status(200).json({message: "ok"}).send();
        }).catch(next);
});

module.exports = router;