const mongoose =  require('mongoose');
const { Schema } = mongoose;

// create user schema
const messageSchema = new Schema({
        from_user: {
            id: String,
            name: String
        },
        to_user: {
            id: String,
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
