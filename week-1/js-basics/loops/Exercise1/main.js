//Loops

// Exercise 1:
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i in names){
    let person = {name: names[i], age: ages[i]};
    people.push(person);
}
console.log(people)
