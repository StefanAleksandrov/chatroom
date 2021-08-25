const router = require('express').Router();
const { COOKIE_NAME } = require('../config/config');

//Services
const authService = require('../services/authService');

//Middlewares

//GET

//POST
router.post('/register', (req, res, next) => {
    const { email, password, repeatPassword } = req.body;

    //Check if the request body has all the required information
    if (!email || !password || !repeatPassword) return void res.status(400).json({message: "Provide all required information!"}).send();
    //Check if the passwords match each other
    if (password != repeatPassword) return void res.status(400).json({message: "Passwords should match"}).send();

    authService.getUserByEmail(email.toLowerCase())
        .then(user => {
            //Check if user with this email already exists and if so return error
            if (user) throw ({message: "User already exists", status: 409});
            //Else attempt to create new user
            else return authService.register(email.toLowerCase(), password);
        })
        .then(data => res.status(201).json({ message: "success", user: {email: data.email, id: data._id} }).send())
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    //Check if the request body has all the required information
    if (!email || !password) return void res.status(400).json({message: "Provide all required information!"}).send();

    authService.login(email, password)
        .then(data => {
            res.status(200)
                .cookie(COOKIE_NAME, data[0], {HttpOnly: true, path:"/", secure: false, SameSite: "None"})
                .json({ token: data[0], user: data[1] })
                .send();
        })
        .catch(next);
});

router.post('/logout', (req, res, next) => {
    res.status(200)
        .clearCookie(COOKIE_NAME, {HttpOnly: true, path:"/", secure: false, SameSite: "None"})
        .json({ message: "success" })
        .send();
});

module.exports = router;