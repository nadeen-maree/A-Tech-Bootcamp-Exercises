// const moment = require('moment')

// let timeNow = new Date()
// console.log(timeNow)

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017

const urllib = require('urllib')

urllib.request('http://www.omdbapi.com/?apikey=3ddb2420&t=The_Lion_King', function(err, response){
    console.log(response.Released.toString())
})