const express = require('express');
const { db } = require('../models/chats');
const router = express();
const Chats = require('../models/chats');
// const messages = require('../models/messages');
const { error, success } = require('../utils/response');


/**
 * post message
 */
router.post('/chats', async (req, res) => {

    //get userid and receiverid
    const { userid, receiverid } = req.headers;
    
    //key list of messages
    const chatarea = `${receiverid}_${userid}`;

    //message
    let message = JSON.parse(req.body)

    /**
     * find if chatarea alreay created and if created then push message
     */
    Chats.findOneAndUpdate({ chatarea: chatarea}, { $push: { messages: message } }) 
    .then(chats => {
        if(chats){
            success(res, 'Message send', message)
        }
        else{
            //crete chatarea
            Chats.create({
                chatarea: chatarea,
                messages: [message]
            }).then(chats => {
                if(chats){
                    success(res, 'Message send', chats)
                }  
            }).catch(err => {
                error(res, 'Unable to push message', err)
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
router.get('/chats', async (req, res) => {

    //get userid and receiverid
    const { userid, receiverid } = req.headers;
    
    //key list of messages
    const chatarea = `${receiverid}_${userid}`;

    /**
     * find if chatarea alreay created and if created then push message
     */
    Chats.findOne({ chatarea: chatarea}) 
    .then(chats => {
        if(chats){
            success(res, 'Messages found', chats.messages)
        }
    })
    .catch(err => {
        error(res, 'Getting error', err)
    })
});

module.exports = router;

