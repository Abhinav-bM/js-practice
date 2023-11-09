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

const a = [1,2,3,4,5,6,7,8,9]

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


