const express = require('express');
const app = express();
const routes = require('./routes');

//Error handling
const globalErrorHandler = require('./middlewares/globalErrorHandler');

//Get port from config file
const {PORT} = require('./config/config');

//Configure server and database
require('./config/express')(app);
require('./config/mongoose');

app.use(routes);
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}, link: http://localhost:${PORT}`);
});