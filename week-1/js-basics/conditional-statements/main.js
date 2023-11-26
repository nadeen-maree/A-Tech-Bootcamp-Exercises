//Conditional Statements

// Exercise:

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018
const YEARS_TO_UPGRADE = 4

if (boughtTesla && isUSCitizen){
    if(currentYear - yearOfTeslaPurchase >= YEARS_TO_UPGRADE){
        console.log("Would you like an upgrade?")
    }else{
        console.log("Are you satisfied with the car?")
    }
}else if(!isUSCitizen){
    console.log("Would you like to move to the US?")
}else{
    console.log("Are you interesting to buy a Tesla?")
}