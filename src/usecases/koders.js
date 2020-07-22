
const Koders = require('../models/koder')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')


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

function create (koderData){
    return Koders.create(koderData)
}

async function signup (koderData) {
    const emailKoder = koderData.email
    const {password} = koderData

    const passwordEncripted = await bcrypt.hash(password)
   // const koderByEmail = await Koders.findOne({ emailKoder })
   // console.log(koderByEmail)
     
        return Koders.create({
            ...koderData,
            password: passwordEncripted
        })
}

async function login (email, passwordPlain) {
    const koderByEmail = await Koders.findOne({ email })
    if (!koderByEmail) {
        throw new Error('Email not found')
    }

    const isValid = await bcrypt.compare(passwordPlain, koderByEmail.password)
    if (!isValid) {
        throw new Error('Password not valid')
    }

return jwt.sign({_id: koderByEmail._id})
}



module.exports = {
    getAll,
    create,
    remove,
    getOne,
    patch,
    signup,
    login
}
