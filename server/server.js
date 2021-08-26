const express = require('express');
const app = express();
const routes = require('./routes');

//CORS settings
const cors = require('./middlewares/cors');
app.use(cors);

//Socket server
const socketServer = require('./socket_server');

//Error handling
const globalErrorHandler = require('./middlewares/globalErrorHandler');

//Get port from config file
const {PORT} = require('./config/config');

//Configure server and database
require('./config/express')(app);
require('./config/mongoose');

app.use(routes);
app.use(globalErrorHandler);

const server = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}, link: http://localhost:${PORT}`);
});

const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:4200']
    }
});

io.on('connect', (socket) => {
    socketServer.init(io, socket);
});