

const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app