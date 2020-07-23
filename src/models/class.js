
const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true, 
    },
    mentor: {
        type: String,
        enum: [
            'Charles',
            'Isra',
            ], 
    //classes: [{ type: classSchema.Types.ObjectId, ref: 'classes' }]
    },
    subject: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('classes', classSchema)