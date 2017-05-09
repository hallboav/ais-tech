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

            /**
             * @todo add json web token
             */
            res.json({ authorization: 'token' });
        });
    });
});

module.exports = router;
