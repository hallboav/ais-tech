const express = require('express');
const app = express();
const public = require('./routes/public');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', public);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ err: err });
});

app.listen(8888);
