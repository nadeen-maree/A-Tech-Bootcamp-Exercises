const port = 3000
const express = require('express')

const { InvalidUsernameError, DuplicatedResourceError, UserNotFoundError} = require('./errorHandling')
const usersModule = require('./userModule')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/users', function (req, res) {
    try {
        let users = usersModule.getAll()
        res.status(200).send(users)
    } catch (error) {
        if (error instanceof UserNotFoundError) {
            res.status(404).send({ "Error": error.message })
        } else {
            res.status(500).send({ "Error": "Internal server error" })
        }
    }
})

app.delete('/users/:username', function (req, res) {
    let username = req.params.username

    try {
        usersModule.delete(username)
        res.status(204).end()
    } catch (error) {
        if (error instanceof UserNotFoundError) {
            res.status(404).send({ "Error": error.message })
        } else {
            res.status(500).send({ "Error": "Internal server error" })
        }
    }
})


app.post('/users', function (req, res) {
    const newUser = req.body
    const username = newUser.username
    try{
        users.add(newUser)
        res.status(201).end()
    } catch (error) {
        if (error instanceof UserInputError || error instanceof InvalidUsernameError || error instanceof UserNotFoundError) {
            res.status(400).send({ "Error": error.message })
        } else if (error instanceof DuplicatedResourceError) {
            res.status(409).send({ "Error": `User ${username} already exists` })
        } else {
            res.status(500).send({ "Error": "Internal server error" })
        }
    }
})

app.get('/users/:username', function (req, res) {
    let username = req.params.username

    try {
        let user = usersModule.getUserByUsername(username)
        res.status(200).send(user)
    } catch (error) {
        if (error instanceof UserNotFoundError) {
            res.status(404).send({ "Error": error.message })
        } else {
            res.status(500).send({ "Error": "Internal server error" })
        }
    }
})

app.listen(port, function () {
    console.log(`Server running on ${port}`)
})