const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "The username should be at least 4 characters long."],
        validate: {
            validator: (value) => {
                return !(/((?![a-zA-Z0-9]).)/.test(value));
            },
            message: "The username should consist of english letters and digits only"
        }
    },

    password: {
        type: String,
        required: true,
        minlength: [5, "Password should be at least 5 symbols"],
    },

    register_date: {
        type: String,
        default: new Date().toDateString(),
    },
});

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            this.username = this.username.toLowerCase();
            next();
        })
        .catch(next);
});

module.exports = mongoose.model("User", UserSchema);