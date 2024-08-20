function sumOfTwo(a,b){
    return a+b
}


// Write a JavaScript program to find the maximum number in an array. 

function maxOfAnArray(arr){
    let max = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(maxOfAnArray([1,2,3,4,15]))