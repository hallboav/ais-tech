const express = require('express');
const app = express();
const mongoose = require('mongoose');
const public = require('./routes/public');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', function (err) {
    throw err;
});

app.use(bodyParser.json());

app.use('/', public);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ err: err });
});

app.listen(8888);
