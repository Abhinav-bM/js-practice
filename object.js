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

function myPromise(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x === 0) {
        resolve("promise resolved");
      } else {
        reject("promise rejected");
      }
    }, 3000);
  });
}

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