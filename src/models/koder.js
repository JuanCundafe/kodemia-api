const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        maxlength: 100,
        minlength: 2
    },
    age: {
        type: Number,
        min: 15,
        max: 100,
        required: true
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female'
        ]
    }
})

module.exports = mongoose.model('koders', koderSchema)