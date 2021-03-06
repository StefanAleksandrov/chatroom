module.exports = function cors (req, res, next) {
    res.setHeader('Access-Control-Allow-Credentials', "true");
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:4200');
    res.setHeader("Access-Control-Allow-Methods", 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type, Authorization, X-Requested-With, X-HTTP-Method-Override, Accept');

    next();
}