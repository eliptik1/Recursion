//Fibonacci function with iteration
function fibonacci(num){
    if(num <= 1) return [0]
    let arr = [0,1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    return arr
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//With recursion
function fibsRec(num){
    if(num <= 1) return [0]
    if(num === 2) return [0, 1]
    let result = fibsRec(num - 1)
    result.push(result[result.length - 1] + result[result.length -2])
    return result
}

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]