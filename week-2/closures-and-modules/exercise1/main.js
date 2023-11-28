
const StringFormatter = function(){
   
    const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
    const toSkewerCase = str =>{
        let newStr = "";
        for(let i = 0; i < str.length; i++){
            if(str[i] === " "){
                newStr += "-";
            } else {
                newStr += str[i];
            }
        }
        return newStr;
    }
    return{
        capitalize: capitalizeFirst,
        skewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalize("dorothy")) //should return Dorothy
console.log(formatter.skewerCase("blue box")) //should return blue-box
