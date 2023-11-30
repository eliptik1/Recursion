//Two Way Merge Sort

let arr1 = [2,8,15,18] //sorted array 1
let arr2 = [5,9,12,17] //sorted array 2
let sortedArr = []

function merge(arr1,arr2){
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i++]) //first push the item arr1[i], then increment i by one
        } else {
            sortedArr.push(arr2[j++])
        }
    }
    //if there are remaining items, add them to the result array
    for(i; i < arr1.length; i++){
        sortedArr.push(arr1[i])
    }
    for(j; j < arr2.length; j++){
        sortedArr.push(arr2[j])
    }
    return sortedArr
}

console.log(merge(arr1, arr2))