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

