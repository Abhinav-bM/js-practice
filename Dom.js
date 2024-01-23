// let persons = [
//   { firstName: "Abhinav ", secondName: "B Manoj", Age: 22 },
//   { firstName: "rahul ", secondName: "N p", Age: 27 },
//   { firstName: "jeevan ", secondName: " joji", Age: 22 },
//   { firstName: "rohit", secondName: "k", Age: 24 },
// ]

// persons.forEach((x)=>console.log(x.firstName + " " + x.secondName))
// let fulName = persons.map((x) => x.firstName + " " + x.secondName)
// console.log(fulName);

// // odd
// let odd = x.filter((x)=> x % 2)
// console.log(odd)

// // even
// let even = x.filter((x)=> x % 2 === 0 )
// console.log(even);

// persons.map((x)=>{
//     if(x.Age > 22){
//         console.log(x.firstName + " " + x.secondName)
//     }
// })

let x = [1, 3, 5, 4, 2, 7, 8, 9];

// function minElement (x){
//     let min = 10
//     for(let i=0; i<x.length; i++){
//         if(x[i] < min){
//             min = x[i]
//         }
//     }
//     return min;
// }

// console.log(minElement(x));

// let max = x.reduce((acc, curr)=>{
//     return acc + curr
// },)

// console.log(max)

let persons = [
  { firstName: "Abhinav ", secondNAme: "B Manoj", Age: 22 },
  { firstName: "rahul ", secondNAme: "N p", Age: 27 },
  { firstName: "jeevan ", secondNAme: " joji", Age: 22 },
  { firstName: "rohit ", secondNAme: "k", Age: 24 },
];

let fullName = persons.map((x)=> x.firstName + x.secondNAme)

persons.forEach((x)=>console.log(x.firstName+x.secondNAme))

console.log(fullName);