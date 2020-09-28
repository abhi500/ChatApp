const express = require('express');
const router = express();
const User = require('../models/user');
const { error, success } = require('../utils/response');

/**
 * get all user
 */
router.get('/users', (req, res) => {
    User.find({})
    .then(users => {
        res.json(users)
    }).catch(err => {
        res.json(err)
    })
});

module.exports = router;
