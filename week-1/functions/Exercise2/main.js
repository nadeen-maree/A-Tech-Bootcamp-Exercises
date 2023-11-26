// Exercise 2:
const isEven = function(num){
    if (num % 2 == 0){
        return true
    }
    return false
}

const oddNumInArray = function(arr){
    for (i in arr){
        if(!isEven(arr[i])){
            console.log(arr[i])
        }
    }

}

oddNumInArray([1,2,3,4,5,6,7])
