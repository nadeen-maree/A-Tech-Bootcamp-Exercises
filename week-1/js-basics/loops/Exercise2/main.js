//Loops

// Exercise 2 (Extra Practice):

const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i in names){
    let person = {name: names[i], age: ages[i]};
    people.push(person);
}

for (let person of people) {
    console.log(`${person.name} is ${person.age} years old`);
}
