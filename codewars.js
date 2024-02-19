// function diamond(n){
//     if (n <= 0 || n % 2 === 0) {
//         return null;
//     }

//     let diamondString = '';

//     for (let i = 1; i <= n; i += 2) {
//         for (let j = 0; j < (n - i) / 2; j++) {
//             diamondString += ' ';
//         }

//         for (let k = 0; k < i; k++) {
//             diamondString += '*';
//         }

//         diamondString += '\n';
//     }

//     for (let i = n - 2; i >= 1; i -= 2) {

//         for (let j = 0; j < (n - i) / 2; j++) {
//             diamondString += ' ';
//         }

//         for (let k = 0; k < i; k++) {
//             diamondString += '*';
//         }

//         diamondString += '\n';
//     }

//     return diamondString;
// }

// console.log(diamond(9));

// for (let i = 0; i < 5; i++) {
//   let row = " ";
//   for (let j = 0; j < i; j++) {
//     row+='* '
//   }

//   console.log(row);
// }

// charcode at
// let a = "abhinav";

// console.log(a.charCodeAt(1));
// 96;

// let str = "man i need a taxi up to ubud";

// function high(x) {
//   let high = [];
//   let sum = 0;
//   let splitted = x.split(" ");
//   splitted.forEach((data) => {
//     console.log(data);
//   });
// }

// high(str);

/////There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// function queueTime(customers, n) {
//   let tills = Array(n).fill(0); // Initialize tills with 0 time taken
//   for (let i = 0; i < customers.length; i++) {
//     let nextTill = tills.indexOf(Math.min(...tills)); // Find the next available till
//     tills[nextTill] += customers[i]; // Assign the next customer to the available till
//   }
//   return Math.max(...tills); // Return the time taken by the longest running till
// }

// function queueTime(customers, n) {
//   let tills = Array(n).fill(0)
//   // console.log(tills);


// }

// queueTime([1,2,3,4],1)


// 

let arr = [1,2,3,4,3,1]



function sumOfLeftRight(arr){
  
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
        leftSum += arr[j];
    }

    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];
    }

    if (leftSum === rightSum) {
        return i;
    }
}

return -1;
}

console.log(sumOfLeftRight(arr));

