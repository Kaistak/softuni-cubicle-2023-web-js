const express = require('express');
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig')
const routes = require('./router');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);
dbConnect()
    .then(() => console.log('DB is connected...'))
    .catch(err => console.log('Db err: ', err))

app.use(routes);
app.listen(PORT, () => console.log(`server is listennig on port ${PORT}...`))