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
// function factorial(n) {
//   let fact = 1;

//   for (i = 2; i <= n; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }

// console.log(factorial(6));

// function factorial(n) {
//   let fact = 1;

//   for (i = 2; i <= n; i++) {
//     fact *= i;
//   }

//   return fact;
// }

// console.log(factorial(5));

// using recursion
// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(2));


// using recurssion
function isPalindrome(str) {
  // Base case: if the string is empty or has only one character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }

  // Recursive case: check if the first and last characters are the same
  if (str[0] === str[str.length - 1]) {
    // If they are the same, call the function recursively with the substring between them
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    // If the first and last characters are not the same, it's not a palindrome
    return false;
  }
}

console.log(isPalindrome("madam"));
