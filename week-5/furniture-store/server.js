const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', function (request, response) {
    response.send("Server is up and running smoothly")
})

app.get('/priceCheck/:name', function (request, response) {
    const name = request.params.name
    const furniture = {price: null}
    for(s of store){
        if(s.name == name){
            furniture.price = s.price
        }
    }
    response.send(furniture)
})


app.get('/buy/:name', function (request, response) {
    const name = request.params.name
    for(s of store){
        if(s.name == name){
            s.inventory--
            response.send(s)
        }
    }
})


app.get('/sale', function(request, response) {
    const isAdmin = request.query.admin === 'true'

    if (isAdmin) {
        store.forEach(item => {
            if (item.inventory > 10) {
                item.price *= 0.5
            }
        })

        response.send(store)
    } else {
        response.send('You are not authorized to access this route.')
    }
})

app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})