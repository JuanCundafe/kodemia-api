const express = require('express')

const router = express.Router()

const classes = require('../usecases/classes')
const { response } = require('express')

router.get('/', async (request, response) => {
    try{
    const allClasses = await classes.getAll()

    response.json({
        success: true,
        data: {
        classes: allClasses
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

router.post('/', async (request, response) => {
try{
    const newClassesData = request.body

    const newClass = await classes.create(newClassesData)

    response.json({
        success: true,
        data:{
            newClass
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
        const deleteClass = request.params.id
        const identifiedClass = await classes.getOne({_id: deleteClass})
        const deleteClassRemove = await classes.remove(identifiedClass)
    
        response.json({
            success: true,
            data:{
                deleteClassRemove
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
            const newDataClass = request.params.id
            const identifiedClassPatch = await classes.getOne({_id: newDataClass})
            const patchClass = await classes.patch(identifiedClassPatch, request.body)
        
            response.json({
                success: true,
                data:{
                    patchClass
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