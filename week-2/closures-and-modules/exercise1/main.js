
// const family = function(){
//     const members = []

//     const birth = function(name){
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }

// const giveBirth = family()
// giveBirth("nadeen")
// giveBirth("bob")
// giveBirth("moo")
// giveBirth("noo")
// giveBirth("koo")

// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }

//     const subtract = function (x, y) {
//         return x - y;
//     }

//     const multiply = function (x, y) {
//         return x * y;
//     }

//     const divide = function (x, y) {
//         return x / y;
//     }

//   return {
//       add: add,
//       sub: subtract,
//       mult: multiply,
//       div: divide
//   }
// }

// const cal = mathOperations();
// console.log(cal.add(13, 29));
// console.log(cal.mult(1.75, 24));
// console.log(cal.mult(1.75, cal.div(36, 6)));

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()
// usersModule.addUser('Nadeen')
// usersModule.addUser('Bob')
// usersModule.listUsers()
// console.log(usersModule.users)

// let _memories = ["that time at band camp", "yesterday's breakfast"]
    
// const Brain = function(){
//     const dayDream = () => _memories
//     const experience = memory => _memories.push(memory)
//     const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
//     const spazz = () => console.log("bleurg")

//     return{
//         reminisce: dayDream,
//         live: experience,
//         blank: forget,
//         freakOut: spazz
//     }
// }

// const brain = Brain()
// brain.freakOut()

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
