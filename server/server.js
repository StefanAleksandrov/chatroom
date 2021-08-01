const express = require('express');
const app = express();
const routes = require('./routes');

const {PORT} = require('./config/config');

//Configure server
require('./config/mongoose');
require('./config/express')(app);

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}, link: http://localhost:${PORT}`);
});