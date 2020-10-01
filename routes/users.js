const express = require('express');
const router = express();
const User = require('../models/user');
const { error, success } = require('../utils/response');
const { addUserId } = require('../middlewares/add-userid-request');

/**
 * get all user
 */
router.get('/users', addUserId(), (req, res) => {

    //self id
    const { userid } = req.headers;
    
    //find all users except self
    User.find({ "_id": {$ne: userid}
    }, {name: true, email: true})
    .then(users => {
        success(res, 'Users fetched', users)
    })
    .catch(err => {
        error(res, 'Unable to get users', err)
    })
});

module.exports = router;
