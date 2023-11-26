// Objects

//Extensions:
const DATE = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let hasOven = kitchen.hasOven
let works = kitchen.fridge.works

const daysAgo = DATE - kitchen.fridge.items[1].expiryDate;
let daysMessage = '';

if (daysAgo === 1) {
    daysMessage = '1 day';
} else {
    daysMessage = `${daysAgo} days`;
}

if(hasOven && works){
    console.log(`Geraldine’s raddish expired ${daysMessage} ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.`);
} else if (!hasOven && works) {
    console.log(`Geraldine’s raddish expired ${daysMessage} ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.`);
} else if (hasOven && !works) {
    console.log(`Geraldine’s raddish expired ${daysMessage} ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`);
} else if (!hasOven && !works) {
    console.log(`Geraldine’s raddish expired ${daysMessage} ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay ${kitchen.fridge.price / 2} to fix the fridge.`);
}
