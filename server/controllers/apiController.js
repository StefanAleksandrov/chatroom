const router = require('express').Router();

//Services
const apiService = require('../services/apiService');
const authService = require('../services/authService');

//Middlewares

//GET
router.get('/chatrooms', (req, res, next) => {
    const criteria = req.query.criteria;

    if (criteria && criteria.length > 0 && typeof criteria == 'string') {
        apiService.getChatroomsByName(criteria)
            .then(chatrooms => {
                res.json({ chatrooms });
            }).catch(next);

    } else {
        apiService.getChatrooms()
            .then(chatrooms => {
                res.json({ chatrooms });
            }).catch(next);
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

router.post('/chatrooms/edit', (req, res) => {
    const { } = req.body;
});

module.exports = router;