const express = require('express')
const app = express()

const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/users/:userID', function (request, response) {
    const userID = request.params.userID
    const sentence = users[userID]
    response.send(`${sentence}`)
})

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})

app.get('/life', function (request, response) {
    response.send("42")
})

app.get('/landing/:username', function (request, response) {
    response.send(`Hi there, ${request.params.username}`)
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})