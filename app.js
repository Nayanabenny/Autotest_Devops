const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('Give errors.');
});

module.exports = app;
