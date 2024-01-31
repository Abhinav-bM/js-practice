function egBigO(arr){
    let sum = 0
    for(i=0; i<arr.length; i++){
        sum+=arr[i]
    }

    return sum
}

let a = [1,2,3,4,5]

console.log(egBigO(a))