const router = require('express').Router();
const { COOKIE_NAME } = require('../config/config');

//Services
const authService = require('../services/authService');

//Middlewares

//GET

//POST
router.post('/register', (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    //Check if the request body has all the required information
    if (!username || !password || !repeatPassword) return void res.status(401).json({message: "Provide all required information!"}).send();
    //Check if the passwords match each other
    if (password != repeatPassword) return void res.status(401).json({message: "Passwords should match"}).send();

    authService.getUserByUsername(username.toLowerCase())
        .then(user => {
            //Check if user with this username already exists and if so return error
            if (user) throw ({message: "User already exists", status: 409});
            //Else attempt to create new user
            else return authService.register(username.toLowerCase(), password);
        })
        .then(data => res.status(201).json({ message: "success", user: data }).send())
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    //Check if the request body has all the required information
    if (!username || !password) return void res.status(401).json({message: "Provide all required information!"}).send();

    authService.login(username, password)
        .then(data => {
            res.status(201)
                .cookie(COOKIE_NAME, data[0], { httpOnly: true })
                .cookie('username', data[1].username)
                .json({ message: "success", user: data[1] })
                .send();
        })
        .catch(next);
});

router.post('/logout', (req, res, next) => {
    res.status(200)
        .cookie(COOKIE_NAME, data[0], { httpOnly: true })
        .cookie('username', data[1].username)
        .json({ message: "success" })
        .send();
});

module.exports = router;