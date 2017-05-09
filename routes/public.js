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

        /**
         * @todo add bcrypt password encoder
         */
        if (body.password !== user.password) {
            res.status(401);
            return res.json();
        }

        /**
         * @todo add json web token
         */
        res.json({ authorization: 'token' });
    });
});

module.exports = router;
