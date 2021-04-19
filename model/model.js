const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    numOfPeople : {
        type: Number,
        required: true,
        
    },
    date : {
        type: String,
        required: true,
        
    },
    start: {
        type: String,
        required: true,
        
    },
    end: {
        type: String,
        required: true,
    }
})

const Meetdb = mongoose.model('Meetdb', schema);

module.exports = Meetdb;