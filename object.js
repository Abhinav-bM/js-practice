// let users = {
//   name: "abhinav",
//   age: 22,
//   address: [{ city: "kozhikode" }, { pin: 673513 }],
// };

// let myPromise =  new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject("rejected")
//     },10000)
// })

// function myPromise(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (x === 0) {
//         resolve("promise resolved");
//       } else {
//         reject("promise rejected");
//       }
//     }, 3000);
//   });
// }

// async function divide() {
//   try {
//     console.log("starting");

//     let a = await myPromise(0);

//     console.log(a);

//     console.log("done");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("works every time");
//   }
// }
// divide();

// myPromise(0)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// const promise1 = Promise.resolve('Promise 1 resolved');
// const promise2 = Promise.resolve('Promise 2 resolved');
// const promise3 = Promise.resolve('Promise 3 resolved');

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     console.error('One or more promises were rejected:', error);
//   })

// const shoppingCart = [
//   { name: "Laptop", price: 1000 },
//   { name: "MobilePhone", price: 500 },
//   {
//     name: "Furniture",
//     price: 200,
//     items: [
//       { name: "Chair", price: 50 },
//       { name: "Table", price: 150 },
//     ],
//   },
//   { name: "Headphones", price: 80 },
// ];

// function calculateTotal(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   arr.forEach((x) => {
//     if (x.items) {
//       x.items.forEach((y) => {
//         sum2 += y.price;
//       });
//     } else {
//       sum1 += x.price;
//     }
//   });

//   return sum1 + sum2;
// }
// console.log(calculateTotal(shoppingCart));

// let str = "abhinav"

// console.log(str[1]);

const nestedObject = {
  array1: [
    { name: "ObjectA", value: 10 },
    { name: "ObjectB", value: 20 },
    { name: "ObjectC", value: 30 },
  ],
  array2: [
    { title: "Item1", quantity: 5 },
    { title: "Item2", quantity: 10 },
    { title: "Item3", quantity: 15 },
  ],
  array3: [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 22 },
  ],
};

for (let key in nestedObject) {
  nestedObject[key].forEach((elem) => {
    for (let x in elem) {
      if (elem[x] === "Jane") {
        elem[x] = "Hamim";
      }
    }
  });
}

