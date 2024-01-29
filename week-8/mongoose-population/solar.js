const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test-db', { useNewUrlParser: true })

const visitorSchema = new mongoose.Schema({
    name: String,
    homePlanet: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }]
})

const planetSchema = new mongoose.Schema({
    name: String,
    system: { type: mongoose.Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visitor' }]
})

const solarSystemSchema = new mongoose.Schema({
    planets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }],
    starName: String
})

const Visitor = mongoose.model('Visitor', visitorSchema)
const Planet = mongoose.model('Planet', planetSchema)
const SolarSystem = mongoose.model('SolarSystem', solarSystemSchema)


// const solarSystemInstance = new SolarSystem({
//     planets: [],
//     starName: 'Our Sun'
// })

// const planetInstance = new Planet({
//     name: 'Earth',
//     system: solarSystemInstance._id,
//     visitors: []
// })

// const visitorInstance = new Visitor({
//     name: 'John Doe',
//     homePlanet: planetInstance._id,
//     visitedPlanets: []
// })

// solarSystemInstance.planets.push(planetInstance._id)
// planetInstance.visitors.push(visitorInstance._id)
// visitorInstance.visitedPlanets.push(planetInstance._id)

// Promise.all([
//     solarSystemInstance.save(),
//     planetInstance.save(),
//     visitorInstance.save()
// ])
//     .then(() => {
//         console.log('Data saved successfully')
//     })
//     .catch((err) => {
//         console.error('Error:', err)
//     })




const solarSystemInstance = new SolarSystem({
    planets: [],
    starName: 'Leo'
})

const planetInstance = new Planet({
    name: 'Venus',
    system: solarSystemInstance._id,
    visitors: []
})

const visitorInstance = new Visitor({
    name: 'William Smith',
    homePlanet: planetInstance._id,
    visitedPlanets: []
})

solarSystemInstance.planets.push(planetInstance._id)
planetInstance.visitors.push(visitorInstance._id)
visitorInstance.visitedPlanets.push(planetInstance._id)

// Promise.all([
//     solarSystemInstance.save(),
//     planetInstance.save(),
//     visitorInstance.save()
// ])
//     .then(() => {
//         console.log('Data saved successfully')
//     })
//     .catch((err) => {
//         console.error('Error:', err)
//     })



// Exercise 1:
Visitor.find({})
    .populate('visitedPlanets')
    .then((visitors) => {
        visitors.forEach((visitor) => {
            console.log(`Visited Planets of ${visitor.name}:`, visitor.visitedPlanets)
        })
    })
    .catch((err) => {
        console.error('Error:', err)
    })

    
// Exercise 2:
Planet.findOne({ name: 'Earth' })
    .populate('visitors')
    .then((planet) => {
        console.log('Visitors on Earth:', planet.visitors)
    })
    .catch((err) => {
        console.error('Error:', err)
    })

// Exercise 3:
SolarSystem.findOne({ starName: 'Leo' })
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors',
            model: 'Visitor'
        }
    })
    .then((solarSystem) => {
        const allVisitorsInSystem = solarSystem.planets.reduce(
            (visitors, planet) => visitors.concat(planet.visitors),
            []
        )
        console.log('All Visitors in the System:', allVisitorsInSystem)
    })
    .catch((err) => {
        console.error('Error:', err)
    })


// Exercise 4:
Visitor.findOne({ name: 'William Smith' })
    .populate({
        path: 'homePlanet',
        populate: {
            path: 'system',
            select: 'starName'
        }
    })
    .then((visitor) => {
        console.log('Star Name of Visitor\'s Home Planet System:', visitor.homePlanet.system.starName)
    })
    .catch((err) => {
        console.error('Error:', err)
    })


// Exercise 5:
Planet.findOne({ name: 'Earth' })
    .populate({
        path: 'system',
        select: 'starName'
    })
    .populate('visitors')
    .then((planet) => {
        console.log('Star Name of Planet\'s System:', planet.system.starName)
        console.log('Visitors on Earth:', planet.visitors)
    })
    .catch((err) => {
        console.error('Error:', err)
    })
