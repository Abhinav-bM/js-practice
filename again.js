// let x = 5;
// let y = 6;

// let z=x+y;

// console.log(z);


// const a = "hello world, ";

// const b = "Lets Study Js"

// const c = a+b;

// console.log(c);

// const price1 = 5;

// const price2 = 6;

// price2 = 10;  // error-Assignment to constant variable

// console.log(price2);

// let a = 5, b = 6, c = 8;  // declared in asingle line
 
// let z = a+b+c;

// console.log(z);




// this will show error - x has already been declared
// let x = 5;

// let x = 4;

// console.log(x);

// using var the second declaration will over ride the first
// var x = 54;
// var x = 5;

// console.log(x);



// block scope // can't have to acces variable declared using let or const inside a {}
// {
//     const y = 10;
//     let x = 10;
//     var z =10;
// }

// console.log(z);

//redeclare variable with let, in another block is allowed

// let x = 10;

// {
//     let x = 15;
// }
// console.log(x);

// reassigning


// let x = 10;  // with let you can reassign
//     x = 12;

//     console.log(x);

// const y = 5;  // you can't have to reassign a variable which is declared by cosnt keyword
//     y = 5;

//     console.log(y);

// const x; // you have to  assign a value when delclaring with const
// x = 5;

// console.log(x);

// const x = [1,2,3,4,5,6]

// x = [2,4,7,8] // cant't have to reassign a array which is declared by const

// // but you can change the an element, and you can add element

// console.log(x);

// object with const
    // const cars = {
    //     brand : "bmw",
    //     color : "red"
    // }

    // cars = {             // can't have to redeclare a object which is declred by const
    //     brand : "benz",
    //     color : "yellow"
    // }

// you can add or change the object property

//  const cars = {
//     brand : "bmw",
//     color : "red"
// }

// cars.brand = "audi"; // can change the property


// cars.owner = "john"; // can add new property

// console.log(cars);

// boolean

// const x = 5;

// const y = 4;

// console.log((x==y));


// Array

// const myArray = [1,2,3,3,4,45,5];

// const myString = ["heyy", "hello", "howareyou"]

// console.log(myString);

// object

// const myCar = {
//     brand : "Honda",
//     color : "Red",
//     model : "Civic"
// }

// myCar.year = 2012;

// console.log(myCar);

// type of operator

// const x = 1200;

// console.log(typeof(x));


// undefined - - a variable without a value is undefined
// let x;

// console.log(x);


// conditional statements

// const x = 5;

// const y = 5;

// const z = x + y;

// if(z === 10){
//     console.log("condition is correct");
// }

// const hour = new Date().getHours();
// let g;

// if(hour < 15){
//      g = "yes";
// }
// else{
//      g = "no";
// }

// console.log(g);

// const hour  = new Date().getTime();

// let check;

// if(hour < 10){
//     check = "good morning";
// }
// else if (hour < 12){
//     check = "good day";
// }
// else{
//     check = "good evening";
// }

// console.log(check);

// Switch - The switch statement is used to perform different actions based on different conditions.

// let day;
/*
switch(new Date().getDay()){
    case  0:
        day = "sunday";
        break;
    
    case 1 :
        day = "monday";
        break;
    
    case 2 :
        day = "tuesday";
        break;
    
    case 3 :
        day = "wednesday";
        break;
        
    case 4 :
        day = "thursday";
        break;
    
    case 5 :
        day = "friday";
        break;
     
    case 6 :
        day = "saturday";    
}


console.log(day);*/

// default -keyword check

// let day;

// switch(new Date().getDay()){
//     default:
//         day = "Todayyy";
//         break;
//     case 0 :
//         day = "sunday";
//         break;

//     case 1 :
//         day = "thursday";
//         break;
    
    
// }


// console.log(day);





//-----------Loop----------

// for loop

// const a = [1,2,3,4,5,6,7,8,9]

// for (i = 0; i < a.length; i++){
//     console.log(a[i]);
// }

// loop scope 
// using var in a loop    // this is not possible with let 

// var i = 5;

// for (i = 0; i < 10; i++){

// }

// console.log(i); 

//for in

// for in over objects
// const person = {fname:"John", lname:"Doe", age:25}

// for (let x in person){
//     console.log(person[x]);
// }

// const check = {
//     fname : "hello",
//     sname : "hh"
// }
                                    
// for (let x in check ){
//     co+nsole.log(check[x]);
// }

// for in over arrays

// const check = [1,2,3,4,5,6,7,8,9,0]

// for (let x in check){
//     console.log(check[x]);
// }

// for of
// const cars = ["bmw", "audi", "porsche"]

// let out;

//for/of over an array
// for(let x of cars){
//     console.log(x);
// }

//for/of over a string
// const temp = "Checkingforof";
// for (let x of temp){
//     console.log(x);
// }

//while-- loop--------------------
// let i = 1;
// while(i < 10){
//     console.log("while.loop"+i);
//     i++;
// }

// do while
// let i = 0;

// do{
//     console.log("welcome" + i);
//     i++;
// }
// while(i < 1);

//for vs while comparison
// const cars = ["bmw", "Audi", "Porsche", "Bugatti"];
// let i = 0;
// for(; cars[i]; i++){
//     console.log(cars[i]);
// }
// let i = 0;
// while(cars[i]){
//     console.log(cars[i]);
//     i++;
// }

// functions-----------------------
// function myFunction(a, b){
//     return a * b;
// }

// console.log(myFunction(10,10));
// function used as variable

// function check (num1, num2){
//     return (num1 + num2);
// }

// let x = check(12,3);

// console.log(x);

//local variable----variable insid a function become local scope
// function localCheck(b){
//     let num1 = 10;

//     return num1+b;
// }

// console.log(num1); // it will show an error num1 is not defined

//functions can also be defined as expressions
// let x = function (a, b){return a + b};

// console.log(x(1,2)); // after stored function in a variable, the variable can used as function

//Functions can also be defined with a built-in JavaScript function constructor called Function().
// const myFunction = new Function("a", "b", "return a + b");
// let x = myFunction(10, 5);

// console.log(x);


//self invoke functions
// (function (){
//     console.log("hello");
// })();




//function are objects because they have properties and methods
// argument.length is a property
// function check (a, b){
//     return arguments.length;  
// }
// console.log(check(1, 2));

// toString()--------------
// function check(a, b){
//     return a + b;
// }

// console.log(check.toString());

// ----------Arrow Functions ------------
// const x = (a, b) => a + b;

// console.log(x(1, 2));

//Sequence control------

// function myCalculator(a,b){
//     return a + b;
// }

// function outPut(result){
//     console.log(result);
// }

// let x = myCalculator(10, 5);

// outPut(x);


// Call back function

//examples:
// function myFunction(some){
//     console.log(some);
// }

// function calcSum(num1, num2, func){
//     let sum = num1 + num2;
//     func(sum);
// }

// calcSum(1, 2, myFunction)

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// const positiveNum = removeNeg(myNumbers, (x) => x >= 0);

// console.log(positiveNum);

// function removeNeg(numbers, callback){
//     let newArray = [];
//     for(let x of numbers){
//         if(callback(x)){
//             newArray.push(x);
//         }
//     }
//     return newArray;
// }


//-------Arrays----------
// const cars = new Array("bmw", "Audi", "Honda", "Mercedez", "volvo", "Porsche") // you can create array like this 

// const cars = ["bmw", "Audi", "Honda", "Mercedez", "volvo", "Porsche"] // also can create like this---use this mehthod always


// for (let x of cars){
//     console.log(x);
// }
// const cars = ["bmw", "Audi", "Honda", "Mercedez", "volvo", "Porsche"]

// can convert array to string using toString(), method.

// const cars = ["bmw", "Audi", "Honda", "Mercedez", "volvo", "Porsche"]
// console.log(cars.toString()); // this will out the array as string, separated by commas

// const cars = ["bmw", "Audi", "Honda", "Mercedez", "volvo", "Porsche"]
// console.log(cars); // can access full array element

// Array-- methods-----------

//Length
// const cars  = ["bmw", "Audi", "mercedez", "Honds"];
// console.log(cars.length);

// toString()
// const bikes = ["honda", "Yamaha", "Ducati", "Aprilia"];
// console.log(bikes.toString());

// join()
// const fruits = ["Apple", "Orange", "Mango"];
// console.log(fruits.join(" * "));

// pop()
// const vegetables = ["tomato", "beans", "Onion"];    
// console.log(vegetables.pop());

// push()
// const cars = ["model", "brand", "color"];
// cars.push("year");
// console.log(cars);

// shift()
// const mern = ["mongoDB", "ExpressJS", "React", "Node"];
// mern.shift();
// console.log(mern);

// unShift()
// const cars = ["bmw", "Audi", "Porsche"];
// cars.unshift("mercedez");
// console.log(cars);

//delete
// const cars = ["bmw", "Audi", "Porsche"];
// delete cars[0];
// console.log(cars);

// concat()
// const mern = ["mongoDB", "ExpressJS", "React", "Node"]
// const carBrands = ["bmw", "Audi", "Porsche"];
// const carModels = ["5Series", "911", "RS7"];
// const carsCombine = mern.concat(carBrands, carModels);
// console.log(carsCombine);

// flat()
// const numbers = [[1,2], [3,4], [5,6,7,8,9]];
// const newArray = numbers.flat();
// console.log(newArray);

// splice()
// const fruits = ["Banana", "Orange", "Apple"]
// fruits.splice(2,0, "Lemon", "Kiwi")
// console.log(fruits);

// slice()
// const fruits = ["Banana", "Orange", "Apple", "banana"]
// // const citrus = fruits.slice(1)
// const citrus = fruits.slice(1,3);
// console.log(citrus);


// multi dimentional array
// const myarray = [
//     [1,2,3,4,5,6,[1,3,4]],
//     [7,8,9,10],
//     [,11,12,13,14]
// ]
// console.log(myarray[0][6][2]);


//------------Objects-------------
// const myObj = {
//     firstName : "John",
//     secondName : "Doe",
//     Age : 25
// }


// const myObj = {
//     firstName : "Abhinav",
//     secondName : "B manoj",
//     age : 22,
//     fullName : function(){return this.firstName+ " "+this.secondName}
// }

// console.log(myObj.fullName());

// myObj.name = function(){
//     return this.firstName + " " + this.secondName;
// }

// console.log(myObj.name());

// const person = {
//     firstName : "Abhinav",
//     secondName : "B Manoj",
//     age : 22
// }

// for(let x in person){      // looping through an object
//     console.log(person[x]);
// }

// console.log(Object.values(person));  // displaying an object using    ---object.values(objectName)---  // the output is type is array

// console.log(JSON.stringify(person));


// -----String--methods------
/// length 
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(text.length);

// slice()
// let text  = "Apple, Banana, Kiwi";
// console.log(text.slice(7, 13));
// console.log(text.slice(-12));
// console.log(text.slice(-10, -3));



//----------INTERMEDIATE LEVEL-------------
//Template Literals
// let text = `'heyy' "sjknffklf"`;   // can use both single and double quotes when using back ticks

// let text = `lkdnvdkl
// kdvndfkvmkdnv                 
// dfklvnd`                // can write multiline strings

// let firstName = "john";
// let secondNAme = "Doe"
// let text = `fullName is : ${firstName}, ${secondNAme}`   // can use varible inside string because of template literals

// let x = 10;
// let y = 12.2;
// let text = `total : ${ x + y }`                             // can add expressions
// console.log(text);


// 

// (function (){
//     console.log("hello");
// })();

// (()=> {
//     console.log("checking")
// })();

// (function selfInvoke(){
//     console.log("SelfInvoked");
// })();


//    Rest Operator
// function restSum(...nums){
//     console.log(nums.reduce((total, nums) => total + nums ));
// }

// restSum(1,2,3,4,5);         // we can pass idefinite numbers of arguments if 

//  spread Operator
// let x = [1,2,3,4,5,6]
// let y = [7,6,9]

// let z = [...x, ...y, 10, 11, 12, 13, 14, 15]

// console.log(z);


// IIFE

// (function() { 
//     console.log("Welcome to GFG!"); 
// })(); 

// stirng methods

// let x = "abhinav b";
// let a = "5";
// let y = x.length;
// let y = x.slice(1,7)
// let y = x.substring(1, 7);
// let y = x.substr(1, 5);
// let y = x.replace(" b", " b Manoj");
// let y = x.replaceAll("b", "z");
// let y = x.toUpperCase();
// let y = x.toLowerCase();
// let y = x.concat(a);
// let y = x.trim();
// let y = x.trimStart()
// let y = x.trimEnd();
// let y = a.padStart(4, "x");
// let y = a.padEnd(5,"0");
// let y = a.charAt(0);
// let y = x.split()
// console.log(y);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// slice------------------------------

// let str = "Hello, world!";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.slice(0, 5)); 
// console.log(str.slice(7));
// console.log(str.slice(-6));
// console.log(str.slice(-13, -8));


// substring----------------------------

// let x = "Hello, World";
// console.log(x.substring(-5, 5));


//substr--------------------------------
// let x = "Hello, World!";
// console.log(x.substr(7,4));

// replace -----------------------------
// let x = "Hello Hello world";
// let y = x.replace("Hello", "Hey");
// console.log(y);

// replaceAll --------------------------
// let x  = "Hello Hello World";
// let y = x.replaceAll("Hello", "Hey")
// console.log(y);

// toUpperCase -------------------------
// let x = "hello world";
// let y = x.toUpperCase();
// console.log(y);

// toLowerCase--------------------------
// let x = "HELLO WORLD";
// let y = x.toLowerCase();
// console.log(y);

// concat ------------------------------
// let x = "Hello";
// let y = "world";
// let z = x.concat(" "+y);
// console.log(z);

// trim ---------------------------------
// let x = "   hello World  ";
// let y = x.trim();
// console.log(y);

// trimStart ----------------------------
// let x = "   Hello World";
// let y = x.trimStart();
// console.log(y);

// trimEnd ------------------------------
// let x = "Hello World  ";
// let y = x.trimEnd();
// console.log(y);

// padStart ------------------------------
// let x = "";
// let y = x.padStart(5,0);
// console.log(y);

// padEnd --------------------------------
// let x = "H";
// let y = x.padEnd(6, "0");
// console.log(y);

// charAt --------------------------------
// let x = "hello World!";
// let y = x.charAt(0);
// console.log(y);

// charCodeAt ----------------------------
// let x = "Hello World!";
// let y = x.charCodeAt(3);
// console.log(y);

// split ---------------------------------
// let x = "abhinav,jeevan,rohith,Kunjoottan";
// let  y = x.split(",");
// console.log(y);

// ----------------------------- string search Methods----------------------------------

// indexOf----------------------
// let x = "Abhinav B Manoj";
// let y = x.indexOf("B");
// console.log(y);

// lastIndexOf------------------
// let x = "Hello, how are you? I am fine, thank you.";
// let y = x.lastIndexOf("am");
// console.log(y);

// search ---------------------
// let x = "Hello, how are you?";
// let y = x.search("how");
// console.log(y);

//  match ---------------------
// let x = "The quick brown fox jumps over the lazy dog";
// let y = x.match(/o/g);
// console.log(y);

// matchAll--------------------
// let x = "The quick brown fox jumps over the lazy dog";
// let y = x.matchAll(/[a-z]/g);
// for(let match of y){
//     console.log(match);
// }

// includes------------------
// let x = "hey hello world";
// let y = x.includes("hello");
// console.log(y);

// startWith----------------
// let x = "hey hello world";
// let y = x.startsWith("hello");
// console.log(y);

// endWith-----------------
// let x = "hey hello world";
// let y = x.endsWith("d");
// console.log(y);


//--------------------- Array methods ----------------------------------
// toString---------------
// let x = ["apple", "orange", "pineapple"];
// console.log(x.toString());

// length----------------
// let x = [1,2,3,4,5,6,7,8];
// let y = x.length;
// console.log(y);

// pop-------------------
// let x = ["abhinav","jeevan","arun"];
// let y = x.pop();
// console.log(y);

// push------------------
// let x = ["abhinav", "arun", "jeevan"];
// x.push("rohith");
// console.log(x);

// shift------------------
// let x = ["Abhinav","jeevan","rohit","hamim"];
// let y =  x.shift();
// console.log(x);

// unshift-----------------
// let x = ["Abhinav","jeevan","rohit","hamim"];
// x.unshift("Arun");
// console.log(x);

// delete------------------
// let x = ["Abhinav","jeevan","rohit","hamim"];
// delete x[0];
// console.log(x);

// join-------------------
// let x = ["abhi","rohith","hamim"];
// let y = x.join(", ");
// console.log(y);

// concat--------------
// let x = [1,2,3,4,5];
// let y = [6,7,8,9];
// let merged = x.concat(y);
// console.log(merged);

// let x = [1, 2, [3, 4]];
// let flattened = x.flat();
// console.log(flattened);

// slice---------------
// let x = [1,2,3,4,5,6];
// let y = x.slice(1,5);
// console.log(y);

// splice---------------
//remove
// let x = [1,2,3,4,5];
// let y = x.slice(1,3);
// console.log(y);
//add
// let x = [1,2,3,4,5]
// x.splice(2,0,6,7);
// console.log(x);
// removed-add
// let x = [1,2,3,4,5];
// x.splice(1,2,0,0);
// console.log(x);

// sort ---------
// let x = ["a","b","e","c","f","d"];
// console.log(x.sort());

// let x = [1,3,5,6,7,5,43,2,2];
// function sortnum(x){
//     return x.sort(function(a,b){return b-a})[1];
// }
// console.log(sortnum(x));

// let x = [25,100,250,35];
// x.sort(function(a,b){return b-a});
// console.log(x);

//forEach
// i taked array element
// let numbers = [1,2,3,4,5,6];
// let sum = 0;
// numbers.forEach(function(number){
//     return sum += number;
// })

// console.log(sum);

// it taked array index
// let x = [1,2,3,4,5,6];
// x.sort(function(element,index){
//     console.log(`index ${index} : ${element}`);
// });

// it takes element,index,array
// let x = [1,2,3,4,5,6,7];
// x.forEach(function(element,index,array){
//     console.log(`index ${index} : ${element} : array:length${array.length}`);
// })


//--------------for/In---------------
// for/in iterate through an object properties
// const object = {
//     a : 1,
//     b : 2,
//     c : 3
// }
// for (let property in object){
//     console.log(object[property]);
// }

// let object = {
//     name : "john",
//     age : 30,
//     gender : "male"
// }

// for(let key in object){
//     console.log(`${key} : ${object[key]}`);
// }

//-------for/in------------------
// for in iterates through an ietrable object
// let array = [1,2,3,4,5,6];
// for(let i of array){
//     console.log(i);
// }
// let x = "Abhinav";
// for(let i of x){
//     console.log(i);
// }




// function x (){
//     setTimeout(function(){
//         console.log("heyyyy");
//     },2000);
// };

// x();

// function v (){
//     setTimeout(function x (){
//         console.log("dkjvnvdflkjvd");
//     },5000);
// }
// v();

// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x (y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// })

// function check (){
//     console.log("checking higher Order");
// }
// function x (check){
//     check();
// }
// x(check);

// map()
// let arr  = [2,4,6,8];

// function triple (x){
//     return x*3;
// }

// function binary (x){
//     return x.toString();
// }

// let output  = arr.map(binary);

// console.log(output);

// filter()
// let x = [1,2,3,4,5,6,7,8,9];

// function oddNum(x){
//     return x % 2;
// }

// let greaterthan4 = (x) => x > 4;
 
// let outPut = x.filter(greaterthan4);
// console.log(outPut);

// reduce ()
// let x = [1,2,3,4,5,6,6,7,8,9];
// function maxofArray(arr){
//     let max = arr[0];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(maxofArray(x));

// used reduce
// let max = x.reduce(function(acc, cur){
//     if (cur > acc){
//         acc = cur;
//     }
//     return acc;
// },0);
// console.log(max);

// map() eg:

// const persons = [
//     { firstName: "Ajay", secondName: "John", age: 25},
//     { firstName: "abhiav", secondName: "John", age: 21},
//     { firstName: "rahul", secondName: "John", age: 20},
//     { firstName: "jeevan", secondName: "John", age: 25}
// ];

// let fullname = persons.map(x => x.firstName+ " "+ x.secondName);

// console.log(fullname);


// setTimeout(function(){
//   console.log("hello world");
// }, 1000);

// for(let  i = 0; i <= 100000; i++){
//   console.log("heyyy");
// // };


// function checkvalue (num){
//   return new Promise ((resolve, reject) => {
//     if (num > 10){
//       resolve("value is greater than 10")
//     }
//     else{
//       reject("value is less than 10")
//     }
//   });
// }

// checkvalue(11)
// .then((resolve) => {
//   console.log("success");
// })
// .catch((reject) => {
//   console.error("less than 10");
// })

// function checknum (num){
//   return new Promise((resolve, reject)=>{
//     if(num > 5){
//       resolve("success")
//     }
//     else{
//       reject("fail")
//     }
//   })

// }

// checknum(5)
// .then((resolve)=>{
//   console.log(resolve);
// })
// .catch((reject)=>{
//   console.log(reject);
// })

// function checknum (num){
//   return new Promise ((resolve, reject)=>{
//     if(num == 10){
//       resolve("it is ten")
//     }
//     else{
//       reject("it is not ten")
//     }
//   })
// }

// checknum(0)
// .then((resolve)=>{
//   console.log("success");
// })
// .catch((reject)=>{
//   console.error("fail");
// })



// function add (num1, num2){
//   return new Promise((resolve)=> {
//     resolve(num1 + num2);
//   })
// }

// async function checkAsync (){
//   try{
//     let result = await add(5,5);
//     console.log(`result is ${result}`);
//   }
//   catch(error){
//     console.error("error");
//   }
// }
// checkAsync();


// function checkvalue (num){
//     return new Promise ((resolve, reject) => {
//       if (num > 10){
//         resolve("value is greater than 10")
//       }
//       else{
//         reject("value is less than 10")
//       }
//     });
//   }
//   async function checking(){
//     try{
//       await checkvalue(11);
//       console.log("success");
//     }
//     catch{
//       console.log("djhbvdj");
//     }
//   }
//   checking();

// function checkvalue (num){
//   return new Promise ((resolve, reject)=>{
//     if(num > 10){
//       resolve("greater than ten")
//     }
//     else{
//       reject("less than ten")
//     }
//   })
// }

// checkvalue(1)
// .then((resolve)=>{
//   console.log("success");
// })
// .catch((reject)=>{
//   console.error("fail");
// })




// function checkvalue (num){
//   return new Promise ((resolve, reject)=>{
//     if(num > 10){
//       resolve("greater than ten")
//     }
//     else{
//       reject("less than ten")
//     }
//   })
// }

// async function myasync (){
//   try{
//     await checkvalue(11);
//     console.log("success");
//   }
//   catch{
//     console.log("check failed");
//   }
// }

// myasync();


// function greet(name = 'Guest', greeting = 'Hello') {
//   console.log(`${greeting}, ${name}!`);
// }

// greet("foood", "drinks");


// function checkDefault (num1 = 1, num2 = 3){
//   console.log(`sum = ${num1 * num2}`);
// }
// checkDefault(10, 10);

// let array1 = [1,2,3,4,5,6]
// let array2 = [7,8,9]
// let check = [...array1,...array2]
// console.log(check);

// function sumOfArray (...input){
//    return input.reduce((acc, curr)=>{
//        return acc + curr;
//     },0)
// }
// let input = [1,2,3,4,5];
// console.log(sumOfArray(...input));


// function check () {
//     var a = 10;
//     let b = 20;
//     const c = 40;
// }

// console.log(a);

// const person = {
//     first:"jijit",
//     age:27,
//     place:"dfhjds"
// }
// console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));




// function mypromise (a,b){
//     return new Promise((resolve, reject)=>{
//         if (a > b){
//             resolve("A is bigger than b")
//         }
//         else{
//             reject("A is lesss than b")
//         }
//     })  
// }

// mypromise(2,1)
// .then((resolve)=>{
//     console.log("successfull");
// })
// .catch((reject)=>{
//     console.log("fail");
// })

// const myPromise = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         const success = true;
//         if(success){
//             resolve("Data Fetched")
//         }
//         else{
//             reject ("failed data fetching")
//         }
//     }, 2000)
// })

// myPromise
// .then((resolve)=>{
//     console.log("successful");
// })
// .catch((reject)=>{
//     console.error("error");
// })




// function mypromise (){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Rejected after 1 second")
//         },1000);
//     });
// }

// async function checking (){
//     try{
//         const result = await mypromise()
//         console.log("success");
//     }
//     catch (reject){
//         console.log("fail");
//     }
// }

// checking();

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const succes = true;
//         if (succes){
//             resolve("Success")
//         }
//         else{
//             reject("failed")
//         }
//     },5000)
// });

// // console.log(myPromise);

// myPromise
// .then((resolve)=>{
//     console.log("Promise Success");
// })
// .catch((reject)=>{
//     console.log("promise rejected");
// })


// function checkAsync (num){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const success = false;
//             if(success){
//                 resolve("resolved")
//             }
//             else{
//                 reject("Rejected")
//             }
//         }, 1000);
//     })
// }

// async function check (){
//     try{
//         const result = await checkAsync()
//         console.log(result);
//     }
//     catch(reject){
//         console.log(reject);
//     }   
// }

// check();


// function makeFun(){

//     let name = "Abhinav";

//     function logName (){
//         console.log(name);
//     }
    
//     return logName;
// }

// let x = makeFun();
 
// x();



// let x = 10;

// function check (){

//     function b(){
//         console.log(x);
//     }

//     return b();
// }

// check();


// let a = "abhinav";
// console.log(a.charCodeAt("a"));


// let a = [1,2,3,4,5];

// let b = a.split('');

// console.log(b);

// let person1 = {
//     firstName : "Akshay",
//     lastName : "saini",
// }



// let fullName = function (state, age){
//     console.log(this.firstName + " " + this.lastName + " " + state + " " + age);
// }


// let person2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar"
// }

// fullName.apply(person2, ["kerala", 55]);

let array = [1,2,3,4,5,6,7,8,9,10];

let array2 = ["a","c","d","b","g","f","e"];

// let mapedArray = array.map( (a) => a * 5 );
 
// let filterdArray = array.filter( (a) => a > 5)

// let reducedsum = array.reduce( (acc, curr) => acc + curr )

// console.log(mapedArray);
// console.log(filterdArray);
// console.log(reducedsum);

// let sorted = array.sort((a,b)=>a-b);
// let stringSorted = array2.sort();

// console.log(sorted);
// console.log(stringSorted);

// array.forEach((element)=> console.log(element))

// let found = array.find((number) => number > 5)
// console.log(found);


// function restCheck (...numbers){
//     return numbers.reduce((acc, curr) => acc + curr , 0 )
// }

// console.log(restCheck(10,10,10,1));


// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];
// let joinedArr = [...arr1, ...arr2];

// console.log(joinedArr);

// function calcSum (x, y, z){
//     console.log(x + y + z);
// }

// let arr = [1,2,3];

// calcSum(...arr);

// let obj1 = { a : 20, b : 30}
// let obj2 = { c : 40, d : 50}

// let mergedObj = {...obj1, ...obj2};

// console.log(mergedObj);

// let ogArr = [1,2,3,4,5]
// let copyArr = [...ogArr];
// console.log(copyArr);

// function print (firtArgs, ...secondArgs){
//     console.log("first Arg is" + " " + firtArgs);
//     console.log("Second Args is" + secondArgs);
// }

// print("hello", "hhh", 3);

// array methods

// let arr = [1,2,3,4,5,6,7]

// arr.pop();

// arr.push(8)

// arr.shift()

// arr.unshift(0)

// let sliced = arr.slice(0,3)

// arr.splice(0,0,9,10)

// let maped = arr.map((element) => element * 2)

// let filtered = arr.filter((elements)=> elements > 2 )

// let reducedsum = arr.reduce((acc, curr)=>acc+curr)

// arr.forEach((numbers)=> {
//     console.log(numbers * 2);
// })

// arr.find((elements)=> console.log(elements > 2));

// let arr = [1,2,3,4,5,6,];

// let maped = arr.map((a)=> a * 2);

// console.log(maped);

// closure

// function printString (){
//     let text = "Checking Closure";

//     function printText (){
//         console.log(text);
//     }

//     return printText;

// }

// let checkClosure = printString();
// checkClosure();


// function check (num){
//    return num > 10 ? true : false;
// }


// console.log(check(11));

// function check (a){
//     try{
//         if (a === 0){
//             throw new Error("fail...")
//         }
    
//     return a + 10;
//     }

//     catch(error){
//         return  error.message;
//     }
// }

// console.log(check(1));

// let myPromise = new Promise ((resolve, reject)=> {
//     setTimeout(()=>{
//         // resolve("promise resolved")
//         reject (new Error('promise rejected'))
//     },2000)
// });

// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.error(error.message)
// })

// let myPromise = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve('promse Resolved')
//         reject(new Error ('promise rejected'))
//     },2000)
// })


// myPromise
// .then((result)=>{
//     console.log(result);
// })     
// .catch((error)=>{
//     console.error('Error :' + " " + error.message)
// }) 

// function checkOdd (num){
    
//     return new Promise ((resolve, reject)=>{
//         if (num % 2 !== 0){
//             resolve('odd')
//         }
//         else{
//             reject("not odd")        
//         }
//     })
// }

// checkOdd(10)
// .then((resolve)=>{
//     console.log(resolve);
// })
// .catch((reject)=>{
//     console.log(reject);
// })

// function division (a, b){
   
//     try{
//         if(b === 0){
//             throw new Error("division by zero is not possible")
//         }
//         return a / b;
//     }
//     catch (error){
//         return  error.message;
//     }
// }

// console.log(checkEven(2, 0));

// function division (a, b){
//     try{
//         if(b === 0){
//             throw new Error ('Division by zero is not possible')
//         }
//         return a / b;
//     }
//     catch(error){
//         return error.message;
//     }
// }

// division(1,0)


// function checkOdd(number){
//     return new Promise((resolve, reject)=>{
//         if(number % 2 !== 0){
//             resolve("it is odd")
//         }
//         else{
//             reject("it is not odd")
//         }
//     })
// }

// checkOdd(3)
// .then((resolve)=>{
//     console.log(resolve);
// })
// .catch((reject)=>{
//     console.log(reject);
// })

// function sum (a, b){
//     return new Promise ((resolve, reject)=>{
//         const Added = a + b;
//         if(isNaN(Added)){
//             reject("Error")
//         }
//         else{
//             resolve(Added)
//         }
//     })
// }

// async function asyncAddition (){
//     try{
//         let added = await sum("ekjf",2)
//         console.log(added);
//     }
//     catch(error){
//         console.error("Error")
//     }
// }

// asyncAddition();


// let a = "hey-hello-ok";

// let b = a.split("-")

// console.log(b); 

// destructuring 

// let array1 = [1,2,3,4,5]
// let myObj = {
//     firstName : "Abhinav",
//     lastName : "B Manoj"
// }
// // const [one, two, ...rest] = array1;
// const { firstName : A, lastName} = myObj

// console.log(A);

// function* generatorCheck (){

// }

// immediately invoked function expression
// (function checkOdd (){
//     console.log(`helooo`);
// })();

// let person = {
//     name : "Abhinav",
//     age : 22,
//     qualification : "diploma"
// }

// let {name: N, age : num, qualification : q} = person;

// console.log(q);

// let fruits = ["apple", "Orange"]

// let [one, two] = fruits

// console.log(two);

// Generator functions

// function* checkOdd (n){
//     for(i = 1; i<=n ; i++){
//         yield i ;
//     }
// }

// let checkGen = checkOdd(2);

// function checkGreater (num) {
//         return new Promise ((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(num + 10){
//                     resolve("Greaterthan")
//                 }
//                 else{
//                     reject("Less than")
//                 }
//             })
//         })
// }

// // checkGreater(1)
// // .then((resolve)=>{
// //     console.log(resolve);
// // })
// // .catch((reject)=>{
// //     console.log(reject);
// // })

// async function checkAsy (){
//     try{
//         let result = await checkGreater(5)
//         console.log(result);
//     }
//     catch(error){
//         console.log(error.message);
//     }
// }
// function checkClosure (){
//     let b = 10;

//     function child(){
//         console.log(b);
//     }
//     return child;
// }

// let check = checkClosure();

// check();



// function myCallBack (result){
//     console.log(result);
// }

// function sumOfTwo (num1, num2, callbackFn){
//     let sum = num1 + num2;
//     callbackFn(sum);
// }


// sumOfTwo(1,2,myCallBack)

// function myCallBack (result){
//     console.log(result);
// }

// function sumOfTwo (num1, num2, callbackFunction){
//     let result = num1 + num2;
//     callbackFunction(result)
// }

// sumOfTwo(1,2,myCallBack)


// let myObj = {
//     firstName : "Abhinav",
//     Adddress : {
//         houseNumber : 10,
//     }
// }

// console.log(Object.values(myObj));

// const country = {
//     name: 'USA',
//     details: {
//         population: 330,
       
//         // capital: 'Washington D.C.'
//     }
// };

// const capital = country.details.kj;

// console.log(capital);

// let num1= 10;

// function checkThis (){
//     console.log(num1);
// }

// checkThis();


// function checkOdd (num){
//     return new Promise((resolve, reject)=>{
//         if(num % 2 !== 0){
//             resolve("It is odd")
//         }
//         else{
//             reject("it is even")
//         }
//     })
// }

// checkOdd(2)
// .then((resolve)=>{
//     console.log(resolve);
// })
// .catch((reject)=>{
//     console.log(reject);
// })

// async function checkAwait (){
//     try{
//         const result = await checkOdd(3)
//         console.log(result);
//     }
//     catch (error){
//         console.log("rejected");
//     }
// }

// checkAwait();

// function* checkGen (){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let result = checkGen();

// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);

// function* checkGen (){
//     yield 1; 
//     yield 2;
//     yield 3;
// }

// let iterator = checkGen();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

// function myPromise (){
//     return new Promise((resolve, reject)=>{
//         resolve("resolve")
//         // reject("rejected")
//     })
// }


// async function task (){
//     try{
//         await myPromise();
//         console.log("try worked");
//     }
//     catch (error){
//         console.log("catch worked");
//     }
//     finally{
//         console.log("finally worked");
//     }
// }

// task();


// let arr = [1,2,3,4,5]

// arr.forEach((a)=>{
//     console.log(a*2);
// })

// let maped = arr.map((a)=> a*5)

// console.log(maped);

// let filtered = arr.filter((a)=>a>2)

// let largest = arr.reduce((acc, curr)=>{
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc
// },0)

// console.log(largest);

// let num = 10;

// function log (a){
//     console.log(a*10)
// }

// log(num);

// console.log(num);

// let person = {
//     firstName : "Rahul"
// }

// function change (obj){
//    return  obj.age = 10;
// }

// console.log(change(person));
// console.log(person);

// let myObj = {
//     firstName : "manoj"
// }

// function checkReference (obj){
//     return obj.age = 10;
// }

// checkReference(myObj);

// console.log(myObj);


// let myObj = {
//     firstName : "Abhinav",
//     Age : 22,

//     data1 : function (){
//         return this.firstName + " " + this.Age;
//     }
// }

// console.log(Object.entries(myObj));


// let fruit = "Apple";

// switch (fruit){
//     case 'Apple':
//         console.log("it is an apple")
//     break;
    
//     case 'Orange':
//         console.log("It is an apple")
//     break;
    
//     default:
//         console.log("Unknown fruits")
// }
// let i = 1;


// while (i <= 10 ){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }
// while(i <= 10)

// function fnStatement (){

// }

// let fnEx = function (num1){ return num1 }

// console.log(fnEx(10));

// Anonymous function
// const anony = function (){   }

// Named function expression
// const namedEx = function named (num){
// console.log(num);
// }

// namedEx(5);

// let a = {
//     firstName : "Abhinav",
//     Age : 30
// }

// let b = {...a}
// b.Age = 22;
// console.log(b);
// console.log(a);

// const name1 = {
//     firstName : "Abhinav",
//     lastName : "B manoj",
//     fullName : function (){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// // name1.fullName();

// const name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar"
// }


// // Function borrowing
// name1.fullName.call(name2);


// function fullName (district, hometown){
//     console.log(this.firstName + " " + this.lastName + " " + "from" + " " + district + "," + hometown);
// }


// const name1 = {
//     firstName : "Abhinav",
//     lastName : "B Manoj",
// }

// const name2 = {
//     firstName : "Sachin",
//     lastName : "Tendulkar"
// }


// fullName.call(name1, "kozhikode", "kuttiady")


// function fullName (state, district){
//     console.log(this.firstName + " " + this.lastName + " " + "from" + " " + state + "," + district);
// }

// const name1 = {
//     firstName : "Abhinav",
//     lastName : "B Manoj"
// }

// fullName.apply(name1, ["Kerala", "Kozhikode"]) 

function fullName (state, district){
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + state + "," + district);
}

const name1 = {
    firstName : "Abhinav",
    lastName  : "B Manoj"
}

let bindedFullNAme = fullName.bind(name1, "kerala", "kozhikode")


bindedFullNAme()