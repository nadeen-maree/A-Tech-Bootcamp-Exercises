const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    const { firstName, lastName, age } = req.body

    const newPerson = new Person({
        firstName,
        lastName,
        age
    })

    newPerson.save()
        .then(savedPerson => {
            res.status(201).json(savedPerson)
        })
        .catch(error => {
            res.status(500).send("Error saving person: " + error)
        })
})

router.put('/person/:id', function (req, res) {
    const id = req.params.id
    
    Person.findByIdAndUpdate(id, { age: 80 }, { new: true })
        .then(updatedPerson => {
            if (!updatedPerson) {
                return res.status(404).send('Person not found')
            }
            res.json(updatedPerson)
        })
        .catch(error => {
            res.status(500).send("Error updating person: " + error)
        })
})

router.delete('/apocalypse', function (req, res) {
    Person.deleteMany({})
        .then(() => {
            res.send('All data from the people collection removed - Apocalypse complete!')
        })
        .catch(error => {
            res.status(500).send("Error during the apocalypse: " + error)
        })
})


module.exports = router