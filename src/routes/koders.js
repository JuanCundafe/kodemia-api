
const express = require('express')


const router = express.Router()

const koders = require('../usecases/koders')

const auth = require('../middlewares/auth')

router.use((request, response, next) => {
    console.log('middleware a nivel del router: ', request.crowdsense)
    next()
}, (request, response, next) => {
    console.log('middleware router 2')
    next()
})

const { response } = require('express')

router.get('/', (request, response, next) => {
    console.log('middleware de endpoint GET Koders')
    next()
},
async (request, response) => {
    try{
    const allKoders = await koders.getAll()

    response.json({
        success: true,
        data: {
        koders: allKoders
        }
    })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/', auth, async (request, response) => {
try{
    console.log('koder: ', request.koder)
    const newKodersData = request.body

    const newKoder = await koders.create(newKodersData)

    response.json({
        success: true,
        data:{
            newKoder
        }
    })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try{
        const deleteKoder = request.params.id
        console.log(deleteKoder)
        const identifiedKoder = await koders.getOne({_id: deleteKoder})
        const deleteKoderRemove = await koders.remove(identifiedKoder)
    
        response.json({
            success: true,
            data:{
                deleteKoderRemove
            }
        })
        } catch (error) {
            response.status(400)
            response.json({
                success: false,
                error: error.message
            })
        }
    })

    router.patch('/:id', async (request, response) => {
        try{
            const newDataKoder = request.params.id
            const identifiedKoderPatch = await koders.getOne({_id: newDataKoder})
            console.log(identifiedKoderPatch)
            const patchKoder = await koders.patch(identifiedKoderPatch, request.body)
        
            response.json({
                success: true,
                data:{
                    patchKoder
                }
            })
            } catch (error) {
                response.status(400)
                response.json({
                    success: false,
                    error: error.message
                })
            }
        })

module.exports = router 