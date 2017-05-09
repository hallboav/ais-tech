const router = require('express').Router();

router.post('/login', function (req, res, next) {
    const body = req.body;

    /**
     * @todo add json web token
     */
    res.json({ authorization: 'token' });
});

module.exports = router;
