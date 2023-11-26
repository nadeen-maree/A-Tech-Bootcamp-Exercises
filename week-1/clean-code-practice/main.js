const str1 = "Hello"
const str2 = "World"

const concat = function() {
    console.log(str1 + ", " + str2 + "!")
}



const obj = {
    printHello: function(){ 
       console.log("Hello")
    },
    str: "Click me",
    printButton: function(){
         console.log("Button clicked!")
    }
};


const addNum = function(num1, num2) {
    console.log(`Sum is: ${ num1 + num2 }`)
}

concat();
obj.printButton();
addNum(5, 3);

let weatherObj = {
        temp: 24,
        weatherType: "sunny",
        printWeather: function() {
            console.log("It is " + this.weatherType + " and the temperature is " + this.temp + "°C.")
        }
};

weather.printWeather();