
// var x = 7;

// function greet (){
//     console.log('hello world');
// }

// greet()
// console.log(x);
// console.log(greet);

let myArr = [1,2,2,2,2,2,23,3,3]

let uniqueSet = new Set(myArr)
let newArr = []

// for(let x of uniqueSet){
//     newArr.push(x)
// }

uniqueSet.forEach((x)=>newArr.push(x))


console.log(newArr)