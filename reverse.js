// function reverseStr(str){
//     if(str === ' ' || str.length===0){
//         return str
//     }
//     else{
//         return reverseStr(str.substr(1)) + str.charAt(0)
//     }
// }

// console.log(reverseStr("helooo"));

// function reverse(str) {
//   if (str === "" || str.length === 1) {
//     return str;
//   }

//   return reverse(str.substr(1)) + str.charAt(0);
// }

// console.log(reverse(" "));


// let a = "Hello"
// console.log(a.substr(1)+a.charAt(0));


// function reverse (str){
//     if(str === "" || str.length === 1){
//         return str
//     }

//     return reverse(str.)




// }

// function reverse (str){
//     if(str === '' || str.length === 1){
//         return str
//     }

//     return reverse(str.substr(1)) + str.charAt(0)
// }

// console.log(reverse("heloo"));



function factorial (n){
    if(n===0 || n===1){
        return n
    }

    return n*factorial(n-1)
}


console.log(factorial(5));