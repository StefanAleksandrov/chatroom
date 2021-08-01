const router = require('express').Router();
const {COOKIE_NAME} = require('../config/config');

//Services

//Middlewares

//GET
router.get('/', (req, res) => res.json({response: "REST API"}));

//POST
router.post('/register', (req, res) => {
    const {username, password} = req.body;
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
});

module.exports = router;