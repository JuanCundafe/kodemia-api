const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        maxlength: 100,
        minlength: 2,
        //classes: [{ type: mentorSchema.Types.ObjectId, ref: 'classes' }]
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

module.exports = mongoose.model('mentors', mentorSchema)