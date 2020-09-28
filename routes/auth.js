const express = require('express');
const router = express();
const User = require('../models/user');
const { generateHash, checkPassword } = require('../utils/secure-password');
const { token } = require('../utils/token-generator');
const { error, success } = require('../utils/response');
const { login, register } = require('../middlewares/auth-middleware');


/**
 * register user
 */
router.post('/register', register(), (req, res) => {
    
    let { name, email, password } = req.query;

    generateHash(password, async (hash) => {
        //assign generated hash to password variable
        password = hash;

        //set user info in user model
        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;

        //save user info in db
        user.save((err, data) => {
            if(err) {
                //error response
                error(res, 'User already registed')
            }
            else {
                const user = {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                }
                //response
                success(res, 'User registered', { token: token(user), user: user });
            }   
        })
    })
});

/**
 * login user
 */
router.post('/login', login(), (req, res) => {
    
    let { email, password } = req.query;

    User.findOne({ email: email }, (err, user ) => {
        if(!user){
            error(res, 'User not registed')
            // return;
        }
        else{
            checkPassword(password, user.password, (status) => {
                if(!status){
                    //error response
                    error(res, 'Check your password')
                    // return;
                }
                else{
                    const data = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    }
                    //response
                    success(res, 'User logged in', { token: token(data), user: data });
                    // return;
                }
            })
        }
    })
    
});

module.exports = router;
