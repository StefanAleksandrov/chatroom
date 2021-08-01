const {SECRET, COOKIE_NAME} = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    let token = req.cookies[COOKIE_NAMEM];

    if (token) {
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) res.clearcookie(COOKIE_NAME);
            else req.user = decoded;
        });
    }

    next();
}