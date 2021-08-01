const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require("../config/config");

const auth = {
    register(username, password, repeatPassword) {
        let newUser = new User({ username, password });
        return newUser.save();
    },

    login(username, password) {

    },

    getUserByUsername(username) {
        return User.findOne({username});
    }
}

module.exports = auth;