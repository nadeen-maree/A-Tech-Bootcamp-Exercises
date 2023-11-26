// Scope

/*Section 1:

const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 


1- What will console log?
    distance is not defined
2- Will there be an error?
    yes
3- Why?
    Because the distance variable is a local variable in if statment scope
4- Will something be undefined?
    yes
5- Why?
    Because the distance variable is a local variable in if statment scope
6- To what scope does each variable belong?
    run is a global variable, distance is a local variable in if statment scope
7- Global or local? If local, to which specifically?
    distance is a local variable in if statment scope

*/

/*Section 2:


if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}


1- What will console log?
    Uncaught ReferenceError: cowSound is not defined
2- Will there be an error?
    yes
3- Why?
    Because the cowSound variable is a local variable in if statment scope
4- Will something be undefined?
    yes
5- Why?
    Because the cowSound variable is a local variable in if statment scope
6- To what scope does each variable belong?
    cowSound is a local variable in if statment scope
7- Global or local? If local, to which specifically?
    cowSound is a local variable in if statment scope

*/


/*Section 3:



const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)



1- What will console log?
    Served a special fish
    Served a special lettuce plate
    Served a special curious cheese
    Finished serving all the orders: fish,lettuce plate,curious cheese
2- Will there be an error?
    no
3- Why?
   Because all the variables are legals and have defined
4- Will something be undefined?
    no
5- Why?
    Because all the variables have defined
6- To what scope does each variable belong?
    serveOrders is a global variable,order is a local variable in for loop scope,
    specialOrder is a local variable in for loop scope, allOrders is a global variable
7- Global or local? If local, to which specifically?
    order and specialOrder is a local variable in for loop scope

*/

/*Section 4:


const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


/
1- What will console log?
    Uncaught ReferenceError: seed is not defined
2- Will there be an error?
    yes
3- Why?
    Because the seed variable is a local variable in getSeed function
4- Will something be undefined?
    yes
5- Why?
    Because seed variable has been used in plant function, and the seed variable is a local variable in getSeed function
6- To what scope does each variable belong?
    pot is a global variable,seed is a local variable in getSeed finction scope
7- Global or local? If local, to which specifically?
    seed is a local variable in getSeed function scope

*/

/*Section 5:



const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}


1- What will console log?
    Uncaught ReferenceError: found is not defined at doesUserExist
2- Will there be an error?
    yes
3- Why?
    Because the found variable is a local variable in the if statment scope
4- Will something be undefined?
    yes
5- Why?
    Because the found variable is a local variable in the if statment scope, and then has been used outside it's scope, so found undefined.
6- To what scope does each variable belong?
    found is a local variable in the if statment scope in doesUserExist function
    u is a local variable in the for loop scope in doesUserExist function
7- Global or local? If local, to which specifically?
    found is a local variable in the if statment scope in doesUserExist function
    u is a local variable in the for loop scope in doesUserExist function

*/

/*Section 6:

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}


1- What will console log?
    Uncaught TypeError: Assignment to constant variable.
2- Will there be an error?
    yes
3- Why?
    Because the function is trying to change the value of usEnough variable, and it's a constant variable that we defined it once and can't be change
4- Will something be undefined?
    no
5- Why?
    Because all the variables have been defined.
6- To what scope does each variable belong?
    isEnough is a global variable
    i is a local variable in the for loop scope in makeEnough function
7- Global or local? If local, to which specifically?
    i is a local variable in the for loop scope in makeEnough function

*/