const router = require('express').Router();
const {COOKIE_NAME} = require('../config/config');

//Services

//Middlewares

//GET

//POST
router.post('/register', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
});

module.exports = router;