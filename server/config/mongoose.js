const mongoose = require('mongoose');
const {DB_URI} = require('./config');

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', console.log.bind(console, "Chatroom database connected! N-joy chatting!"));

module.exports = db;