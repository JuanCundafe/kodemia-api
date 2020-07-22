

const express = require('express')

const app = express()

const mentorsRouter = require('./routes/mentors')

const kodersRouter = require('./routes/koders')

const authRouter = require('./routes/auth')

const auth = require('./middlewares/auth')

const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use((request, response, next) => {
    console.log('Middleware de aplicación')
    next()
}, (request, response, next) => {
    console.log('Middleware 2')
    request.crowdsense = 'algún día'
    next()
}, (request, response, next) => {
    console.log('Middleware 3:', request.crowdsense)
    next()
} )

app.use('/koders', kodersRouter)

app.use('/mentors', mentorsRouter)

app.use('/auth', authRouter)

app.get('/', (request, response) => {
    response.json({
        success: true,
        message: 'Kodemia APIv8'
    })
})

module.exports = app