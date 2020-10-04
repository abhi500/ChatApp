const mongoose =  require('mongoose');
const { Schema } = mongoose;
const Message = require('./messages');

// create user schema
const chatsSchema = new Schema({
        unique_id: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        messages: [
            Message
        ]
        
    },{ 
        timestamps: true, 
        versionKey: false
});

module.exports = mongoose.model('chats', chatsSchema);
