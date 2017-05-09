const fs = require('fs');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const public = require('./routes/public');
const secure = require('./routes/secure');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', function (err) {
    throw err;
});

const options = {
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader(),
    // openssl rsa -in private.pem -outform PEM -pubout -out public.pem
    secretOrKey: fs.readFileSync('./resources/public.pem')
};

passport.use(new passportJwt.Strategy(options, function (user, done) {
    /**
     * @todo verify whether token is blacklisted
     */
    done(null, user);
}));

app.use(bodyParser.json());

app.use('/', public);
app.use('/secure', passport.authenticate('jwt', { session: false }), secure);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ err: err });
});

app.listen(8888);
