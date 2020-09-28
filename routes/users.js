const express = require('express');
const router = express();
const User = require('../models/user');
const { error, success } = require('../utils/response');

/**
 * get all user
 */
router.get('/users', (req, res) => {
    User.find({}, {name: true, email: true})
    .then(users => {
        success(res, 'Users fetched', users)
    })
    .catch(err => {
        error(res, 'Unable to get users', err)
    })
});

module.exports = router;
