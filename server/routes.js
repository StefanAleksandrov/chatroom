const router = require('express').Router();

//Controllers
const authController = require('./controllers/authController');
const apiController = require('./controllers/apiController');

//Split requests to controllers
router.use('/auth', authController);
router.use('/api', apiController);

router.get('*', (req, res) => {
    console.log('Request information: ', req.headers);
    res.send('<div>This is my first</div><div>RESTfull API</div>');
});

module.exports = router;