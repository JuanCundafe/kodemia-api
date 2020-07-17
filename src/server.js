

const express = require('express')

const app = express()

const mentorsRouter = require('./routes/mentors')

const kodersRouter = require('./routes/koders')

app.use(express.json())

app.use('/koders', kodersRouter)

app.use('/mentors', mentorsRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app