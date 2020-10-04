const express = require('express');
const { db, find } = require('../models/chats');
const router = express();
const Chats = require('../models/chats');
// const messages = require('../models/messages');
const { error, success } = require('../utils/response');
const { findOneAndUpdate, create } = require('../utils/home-api-queries-db');

/**
 * post message
 */
router.post('/chats', async (req, res) => {

    const { from_user, to_user, message } = req.body;
 
    // res.json(req.body.from_user)
    const payload = {
        from_user: from_user,
        to_user: to_user,
        message: message
    };

    const uniqueId = (from_id, to_id) => {
        return `${from_id}_${to_id}`;
    }

    /**
     * find if chatarea alreay created and if created then push message
     */
    findOneAndUpdate(uniqueId(from_user.id, to_user.id), payload)
    .then(data => {
        if(data){
            findOneAndUpdate(uniqueId(to_user.id, from_user.id), payload)
            .then(data => {
                if(data)
                    success(res, 'Message send')
                else{
                    //crete chatarea
                    create(uniqueId(to_user.id, from_user.id), payload)
                    .then(data => {
                        if(data){
                            success(res, 'Message send', data)
                        }
                    }).catch(err => {
                        error(res, 'Unable to push message', err.message)
                    })
                }
            })
        }
        else{
            //crete chatarea
            create(uniqueId(from_user.id, to_user.id), payload)
            .then(data => {
                if(data){
                    create(uniqueId(to_user.id, from_user.id), payload)
                    .then(data => {
                        if(data){
                            success(res, 'Message send', data)
                        }  
                    }).catch(err => {
                        error(res, 'Unable to push message', err.message)
                    })
                }  
            }).catch(err => {
                error(res, 'Unable to push message', err.message)
            })
        }
    })
    .catch(err => {
        error(res, 'Getting error', err)
    })
});

/**
 * get all user
 */
router.get('/chats', (req, res) => {
 
    const { from_user_id, to_user_id } = req.query;

    const unique_id = `${from_user_id}_${to_user_id}`;

    /**
     * find if chatarea alreay created and if created then push message
     */
    Chats.findOne({ unique_id: unique_id}) 
    .then(data => {
        if(data)
            success(res, 'Messages found', data.messages)
        else
            success(res, 'Messages not found')
        
    })
    .catch(err => {
        error(res, 'Getting error', err)
    })
});

module.exports = router;

