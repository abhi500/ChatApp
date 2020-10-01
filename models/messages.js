const mongoose =  require('mongoose');
const { Schema } = mongoose;

// create user schema
const messageSchema = new Schema({
        sender: {
            id: Number,
            name: String
        },
        receiver: {
            id: Number,
            name: String
        },
        message: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = messageSchema
