const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, "The email should be at least 4 characters long."],
        validate: {
            validator: (value) => {
                return (/^\S+@\S+\.\S+$/.test(value));
            },
            message: "The email is not valid"
        }
    },

    password: {
        type: String,
        required: true,
        minlength: [5, "Password should be at least 5 symbols"],
    },

    chatrooms: [{
        type: mongoose.Types.ObjectId,
        ref: "Chatroom"
    }],

    role: {
        type: String,
        default: "user",
    },

    register_date: {
        type: String,
        default: Date.now
    },
});

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            this.email = this.email.toLowerCase();
            next();
        })
        .catch(next);
});

module.exports = mongoose.model("User", UserSchema);