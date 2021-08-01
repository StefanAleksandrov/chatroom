const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

//Middlewares

module.exports = function(app) {
    //Set up view engine - handlebars
    app.engine('hbs', hbs({
        extname: 'hbs',
        layoutsDir: 'views/layouts',
        partialsDir: 'views/partials',
    }));

    app.set('view engine', 'hbs');

    //Set all the statick files
    app.use('./public', express.static('public'));

    //Read data from req body
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    //Set and read cookies
    app.use(cookieParser());

    //Authentication
}