// let arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9],
//   [10, 11, 12],
// ];

// function minOfNested(arr) {
//   let sum = 0;
//   arr.forEach((x) => {
//     let minValue = x.reduce((acc, curr) => {
//       if (curr < acc) {
//         acc = curr;
//       }
//       return acc;
//     });
//     sum += minValue;
//   });
//   return sum;
// }

// console.log(minOfNested(arr));


let arr = [4,7,5,4,8]

function sumOfunique(arr){
    let [...a]=arr
    let newArr = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<a.length; j++){
            if(arr[i]!==a[j]){
                newArr.push(arr[i])
            }
        }
    }


    
    return newArr.reduce((acc,curr)=>{
        return acc+curr
    },0)
}


sumOfunique(arr)