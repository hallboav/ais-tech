const express = require('express');
const app = express();

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ err: err });
});

app.listen(8888);
