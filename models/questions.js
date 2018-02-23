const mongoose = require('mongoose');

const questionSechema = mongoose.Schema({
    name : {
        type : String,
        required:true
    },
   email: {
        type : String,
        required:true
    },
    quest: {
        type : String,
        required:true
    }  
});


const question = module.exports = mongoose.model('question',questionSechema)