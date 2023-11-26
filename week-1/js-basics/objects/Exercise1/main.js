// Objects

// Exercise 1:
let p1 = {
    name:"Jill",
    age: 20,
    city:"LA"
}

let p2 = {
    name:"Robert",
    age: 20,
    city: "LA"
}

if (p1.age == p2.age){
    if (p1.city == p2.city){
        console.log("Jill wanted to date Robert")
    }else{
        console.log("Jill wanted to date Jill wanted to date Robert, but couldn’t")
    }
}else{
    console.log("They are not in the same age!")
}
