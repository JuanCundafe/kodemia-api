const Mentors = require('../models/mentor')


function getAll (){
    return Mentors.find()
}

function create (mentorData){
    return Mentors.create(mentorData)
}

function remove (mentorID){
    return Mentors.findByIdAndDelete(mentorID)
}

function getOne (mentor){
    return Mentors.findOne(mentor)
}

function patch (mentorID, update){
    return Mentors.findByIdAndUpdate(mentorID, update)
}

module.exports = {
    getAll,
    create,
    remove,
    getOne,
    patch
}