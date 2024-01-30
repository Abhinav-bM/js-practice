// let myArray = [1,2,3,4,5]

// // Pop
// myArray.pop()
// // push
// myArray.push(6)
// // shift
// myArray.shift()
// // Unshift
// myArray.unshift(0)

// // console.log(myArray);


// let myArray1 = [1,2,3,4,5,6]
// // slice
// let sliced = myArray1.slice(0,2)
// // console.log(sliced);

// // splice
// myArray1.splice(5, 0, 7,8,9)
// // console.log(myArray1);


// // map
// let myMapArr = [1,2,3,4,5];
// let maped = myMapArr.map((elem) => elem*100)
// // console.log(maped);

// // filter
// let myfilterArr = [1,2,3,4,5]
// let filtered = myfilterArr.filter((elem)=> elem > 2)
// // console.log(filtered);

// // Reduce
// let arrToReduce = [1,2,3,4]
// let reduced = arrToReduce.reduce((acc, curr)=>{
//     if(curr > acc){
//         acc = curr
//     }
//     return acc
// },0)
// // console.log(reduced);

// // ForEach
// let arrayForEach = [1,2,3,4,5]
// // arrayForEach.forEach((elem, index, array)=> console.log(`${elem} ${index} ${array} `))

// // Sort
// let arraysort = ['a', 'c', 'b', 'd']
// // console.log(arraysort.sort())
// let numSort = [12,10,35,34]
// console.log(numSort.sort((a,b)=> b-a));


// /// currying
// function sum (x,y,z){
//     return x+y+z
// }

// function sum (x){
//     return function (y){
//         return  function (z){
//             return x+y+z
//         }
//     }
// }

// console.log(sum(1)(2)(3));

let b  = [5,6,7,8,9]

let a = [1,2,3,4,5,...b]


console.log(a);