// // var x = 7;

// // function greet (){
// //     console.log('hello world');
// // }

// // greet()
// // console.log(x);
// // console.log(greet);

// // let myArr = [1,2,2,2,2,2,23,3,3]

// // let uniqueSet = new Set(myArr)
// // let newArr = []

// // // for(let x of uniqueSet){
// // //     newArr.push(x)
// // // }

// // uniqueSet.forEach((x)=>newArr.push(x))

// // console.log(newArr)

// // let a = 10

// // console.log(a);
// // greet()

// // function greet (){
// //     console.log("Heloooooooooooooooooooooo")
// // }

// let array = [

//     {
//         home:{
//             siblings:"3",
//             members:2,
//             address:[{city:"kochi"},{pin:111111}]
//         },
//         school:"svghsss"
//     },

//     {
//         home:{
//             siblings:"0",
//             members:6,
//             address:[{city:"malappuram"},{pin:222222}]
//         },
//         school:"gvhss"
//     },

//     {
//         home:{
//             siblings:"2",
//             members:7,
//             address:[{city:"kozhikode"},{pin:333333}]
//         },
//         school:"scss"
//     },
// ]

// array.forEach((x)=>{
//     x.home.address.forEach((y)=>{

//         if(y.city === 'kozhikode'){
//             y.city = "Kottyam"
//         }
//         console.log(y);
//     })
// })

// let a = require('./export')
// a.muti(1,2)

// let newArr = [1,2,3,4,5,6,7]

// let sum = newArr.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(sum);

// let arr = [
//   {
//     name: "Lincy",
//     age: 33,
//     address: [{ city: "Alappuza" }, { pin: 111111 }],
//   },

//   {
//     name: "Abhinav",
//     age: 22,
//     address: [{ city: "Kozhikode" }, { pin: 222222 }],
//   },
// ];

// arr.map((x) => {
//   if (x.age > 22) {
//     x.age = 50;
//   }
// });

// console.log(arr);



// function greet (){
    
//     for(var i = 1; i<=5; i++){
//         function closure(i){
//             setTimeout(()=>{
//                 console.log(i)
//             },i*1000)
//         }
//         closure(i)
//     }

//     console.log('heloooooooo');
// }

// greet()


function sum (...a){
 return a.reduce((acc, curr)=>{
    return acc+curr;
 },0)
}


console.log(sum(1,2,3,3,4,5));