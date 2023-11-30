//Two Way Merge Sort

//let arr1 = [2,8,15,18] //sorted array 1
//let arr2 = [5,9,12,17] //sorted array 2

function merge(arr1,arr2){
    let i = 0
    let j = 0
    let sortedArr = []
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

//Merge Sort Algorithm
function mergeSort(firstIndex, lastIndex, arr){
    if(firstIndex < lastIndex){ //if the splitted array has more than 1 element
        let midIndex = Math.floor((firstIndex + lastIndex) / 2)
        let firstHalf = mergeSort(firstIndex, midIndex, arr)
        let secondHalf = mergeSort(midIndex + 1, lastIndex, arr)
        return merge(firstHalf, secondHalf)
    } else { //else return the smallest part of the array
        return [arr[firstIndex]]
    }
}

function sortArray(arr){
    return mergeSort(0, arr.length-1, arr)
}

console.log(sortArray([9,3,7,5,6,4,8,2])) // [2, 3, 4, 5, 6, 7, 8, 9]