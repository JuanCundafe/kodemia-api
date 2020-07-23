
const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true, 
    },
    mentor: {
        type: String,
        enum: [
            'Charles',
            'Isra'
        ]
    },
    subject: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('classes', mentorSchema)