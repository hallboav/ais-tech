const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = require('express').Router();

router.post('/login', function (req, res, next) {
    const body = req.body;

    User.findOne({ email: body.email }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(404);
            return res.json();
        }

        bcrypt.compare(body.password, user.password, function (err, isMatch) {
            if (err) throw err;

            if (!isMatch) {
                res.status(401);
                return res.json();
            }

            const payload = {
                name: user.name,
                email: user.email,
                roles: user.roles
            };

            // openssl genrsa -out private.pem 2048
            const cert = fs.readFileSync('./resources/private.pem');
            const token = jwt.sign(payload, cert, { algorithm: 'RS512' });
            res.json({ authorization: token });
        });
    });
});

module.exports = router;
