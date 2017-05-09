const User = require('../models/user');
const router = require('express').Router();

router.get('/users', function (req, res, next) {
    User.find({}, '-_id name email roles', function (err, users) {
        if (err) throw err;

        res.json({ users: users });
    });
});

module.exports = router;
