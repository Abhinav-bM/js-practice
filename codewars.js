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

let str = "man i need a taxi up to ubud";

function high(x) {
  let high = [];
  let sum = 0;
  let splitted = x.split(" ");
  splitted.forEach((data) => {
    console.log(data);
  });
}

high(str);
