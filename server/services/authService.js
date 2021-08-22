const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config");

const auth = {
    register(email, password) {
        let newUser = new User({ email, password });
        return newUser.save();
    },

    login(email, password, next) {
        let foundUser = {};
        
        return User.findOne({email})
            .populate('chatrooms')
            .then(user => {
                if (!user) throw ({ status: 404, message: "Incorrect email or password." });
                
                foundUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then(areEqual => {
                if (!areEqual) throw ({ status: 404, message: "Incorrect email or password." });
                const user = {_id: foundUser._id, email: foundUser.email, role: foundUser.role, chatrooms: foundUser.chatrooms, register_date: foundUser.register_date};

                return [jwt.sign(user, SECRET), user];
            })
            .catch(next);
    },

    getUserByEmail(email) {
        return User.findOne({email});
    }
}

module.exports = auth;