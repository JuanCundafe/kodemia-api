

const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')

app.use(express.json())

app.use('/koders', kodersRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app