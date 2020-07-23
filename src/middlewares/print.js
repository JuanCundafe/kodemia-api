const { response } = require('express')

const Koder = require('../models/koder')

async function print (request, response, next) {
    if(request.body == 'GET'){
        console.log(`[${request.method}] ${request.url}`)
    }else{
        console.log(`[${request.method}] ${request.url} - ${JSON.stringify(request.body)}`)
    }
    next()
}

module.exports =  print
