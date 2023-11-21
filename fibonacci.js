//Fibonacci function with iteration
function fibonacci(num){
    let arr = [0,1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }
    return arr
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]