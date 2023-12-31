// const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
//   useNewUrlParser: true,
// }).catch((err)=> console.log(err))

// const addressSchema = new mongoose.Schema({
//     city : String,
//     street: String,
//     apartment : Number
// })

// const personSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     age: Number,
//     address : addressSchema
// })

// const Person = mongoose.model('person', personSchema)

// let p1 = new Person({ firstName: "David", lastName: "Smith", age: 25 })

// console.log(p1)

// //Person.find({}).then(function (people) {console.log(people)})
// let peoplePromise = Person.find({})

// peoplePromise.then(function (people) {
//     console.log(people)
// })
// .catch((err)=>console.log(err))

// let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
// let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
// let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
// let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

// let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// // Person.findById("6591a23b115410ab545187bb").then( function (person) {
// //     person.age += 10 //how time flies
// //     person.save()
// // })

// // Person.findByIdAndUpdate("6591a9116f1235e187e48573", { age: 70 }).then( function (person) {
// //     console.log(person)
// // })

// // Person.findByIdAndUpdate("5c16c63bc5ad73471c3ca323", { age: 70 }, { new: true }).then( function (person) {
// //     console.log(person)
// // })

// Person.findByIdAndDelete("6591a9b3464b1b5528e6c697").then((person)=>{
//     console.log(person)
//   })



const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
})

const Person = mongoose.model("person", personSchema)
module.exports = Person