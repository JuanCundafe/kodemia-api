const Classes = require('../models/class')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')


function getAll (){
    return Classes.find()
}

function create (classData){
    return Classes.create(classData)
}

function remove (classID){
    return Classes.findByIdAndDelete(classID)
}

function getOne (classObject) {
    return Classes.findOne(classObject)
}

function patch (classID, update){
    return Classes.findByIdAndUpdate(classID, update)
}

function create (classData){
    return Classes.create(classData)
}

module.exports = {
    getAll,
    create,
    remove,
    getOne,
    patch,
}
