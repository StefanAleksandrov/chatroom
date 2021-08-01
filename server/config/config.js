const config = {
    PORT: 8080,
    DB_URI: 'mongodb://localhost/chatroom',
    SALT_ROUNDS: 9,
    SECRET: 'abcBCA1991!**!',
    COOKIE_NAME: 'user_token',
}

module.exports = config;