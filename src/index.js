const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('hello from express server')
})

app.listen(PORT, () => console.log(`server is listennig on port ${PORT}...`))