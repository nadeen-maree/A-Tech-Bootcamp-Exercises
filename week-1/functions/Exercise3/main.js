// Exercise 3:

const isNumInArr = function(arr, num){
    for (i in arr){
        if (arr[i] === num){
            return true
        }
    }
    return false
}

console.log(isNumInArr([1, 2, 3], 5))
