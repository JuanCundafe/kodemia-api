
const Koders = require('../models/koder')


function getAll (){
    return Koders.find()
}

function create (koderData){
    return Koders.create(koderData)
}

function remove (koderID){
    return Koders.findByIdAndDelete(koderID)
}

function getOne (koder){
    return Koders.findOne(koder)
}

function patch (koderID, update){
    return Koders.findByIdAndUpdate(koderID, update)
}

module.exports = {
    getAll,
    create,
    remove,
    getOne,
    patch
}