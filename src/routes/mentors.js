const express = require('express')

const router = express.Router()

const mentors = require('../usecases/mentors')
const { response } = require('express')

router.get('/', async (request, response) => {
    try{
    const allMentors = await mentors.getAll()

    response.json({
        success: true,
        data: {
        mentors: allMentors
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
    const newMentorsData = request.body

    const newMentor = await mentors.create(newMentorsData)

    response.json({
        success: true,
        data:{
            newMentor
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
        const deleteMentor = request.params.id
        console.log(deleteMentor)
        const identifiedMentor = await mentors.getOne({_id: deleteMentor})
        const deleteMentorRemove = await mentors.remove(identifiedMentor)
    
        response.json({
            success: true,
            data:{
                deleteMentorRemove
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
            const newDataMentor = request.params.id
            const identifiedMentorPatch = await mentors.getOne({_id: newDataMentor})
            const patchMentor = await mentors.patch(identifiedMentorPatch, request.body)
        
            response.json({
                success: true,
                data:{
                    patchMentor
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