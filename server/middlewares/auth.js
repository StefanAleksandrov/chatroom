const {SECRET, COOKIE_NAME} = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    let token = req.cookies[COOKIE_NAME];

    if (token) {
        jwt.verify(token, SECRET, function(err, decoded) {
            if (err) res.clearcookie(COOKIE_NAME, {HttpOnly: true, path:"/", secure: false, SameSite: "None"});
            else req.user = decoded;
        });

    }

    next();
}