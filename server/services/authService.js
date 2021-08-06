const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config");

const auth = {
    register(username, password) {
        let newUser = new User({ username, password });
        return newUser.save();
    },

    login(username, password, next) {
        let foundUser = {};
        
        return User.findOne({username})
            .then(user => {
                if (!user) throw ({ status: 404, message: "Incorrect username or password." });
                
                foundUser = user;
                return bcrypt.compare(password, user.password);
            })
            .then(areEqual => {
                if (!areEqual) throw ({ status: 404, message: "Incorrect username or password." });

                return [jwt.sign({_id: foundUser._id, username: foundUser.username, role: foundUser.role}, SECRET), foundUser];
            })
            .catch(next);
    },

    getUserByUsername(username) {
        return User.findOne({username});
    }
}

module.exports = auth;