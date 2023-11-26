
const time = new Date()
const returnTime = function (time) {
  alert('The current time is: ' + time)
}

const getTime = function (func){
  setTimeout(func(time), 3000)
}
getTime(returnTime)