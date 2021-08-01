const router = require('express').Router();
const { COOKIE_NAME } = require('../config/config');

//Services
const authService = require('../services/authService');

//Middlewares

//GET

//POST
router.post('/register', (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if (password != repeatPassword) return void res.status(401).json({message: "Passwords should match"}).send();

    authService.getUserByUsername(username)
        .then(user => {
            //Check if user with this username already exists and if so return error
            if (user) throw ({message: "User already exists", status: 409});
            //Else attempt to create new user
            else return authService.register(username, password, repeatPassword);
        })
        .then(data => res.status(201).json({ message: "success", user: data }).send())
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    authService.login(username, password)
        .then(data => res.status(201).json({ message: "success", user: data }).send())
        .catch(next);
});

module.exports = router;