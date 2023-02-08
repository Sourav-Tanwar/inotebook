const mongoose = require('mongoose');

const NotesSchema = new Schema({
    name:{
            type: String,
            required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    passwod:{
        type: String,
        required: true

    },
    date:{
        type: Date,
        default: Date.now
    }, 
});

module.exports = monhgoose.model('notes', NotesSchema);