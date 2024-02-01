// let a = [6,5,4,3,9,8,0]

// function result (arr, target){
//     let result = []
//     for(i=0; i<arr.length-1; i++){
//         for(j=1+1; j<arr.length; i++){
//             if(arr[i]+arr[j]===target){
//                 result.push(arr[i],arr[j])
//                 return result
//             }else{
//                 return "not possible"
//             }
//         }
//     }
// }

// console.log(result(a,10));

// move a number to the last of the array
let a = [6, 1, 6, 8, 10, 4, 15, 6, , 3, 9, 6];

// factorial of number using for loops
function factorial(n) {
  let fact = 1;

  for (i = 2; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5));
