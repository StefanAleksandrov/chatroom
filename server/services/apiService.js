const Chatroom = require('../models/Chatroom');
const User = require('../models/User');

const auth = {
    createChatroom(name, description, image, creator) {
        let newChatroom = new Chatroom({ name, description, image, creator, members: [creator] });
        return newChatroom.save();
    },

    // login(email, password, next) {
    //     let foundUser = {};
        
    //     return User.findOne({email})
    //         .populate('chatrooms')
    //         .then(user => {
    //             if (!user) throw ({ status: 404, message: "Incorrect email or password." });
                
    //             foundUser = user;
    //             return bcrypt.compare(password, user.password);
    //         })
    //         .then(areEqual => {
    //             if (!areEqual) throw ({ status: 404, message: "Incorrect email or password." });
    //             const user = {_id: foundUser._id, email: foundUser.email, role: foundUser.role, chatrooms: foundUser.chatrooms, register_date: foundUser.register_date};

    //             return [jwt.sign(user, SECRET), user];
    //         })
    //         .catch(next);
    // },

    getChatroomByName(name){
        return Chatroom.findOne({name});
    },

    getChatroomById(_id) {
        return Chatroom.findOne({_id});
    }
}

module.exports = auth;