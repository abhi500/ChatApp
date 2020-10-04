const Chats = require('../models/chats');

module.exports.findOneAndUpdate = async (unique_id, payload) => {
    return await Chats.findOneAndUpdate({ unique_id: unique_id }, 
        {  $push: { messages: payload } 
    });
}

module.exports.create = async (unique_id, payload) => {
    return await Chats.create({
        unique_id: unique_id,
        messages: [payload]
    });
}