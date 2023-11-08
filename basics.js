// const a = [[10,15,20],[[35,660,500],[100,200,300]]]

// console.log(a[1][0][1]);


// returning boolean from functions

// function booleanreturn(a, b){
//     return  a < b ;
// }

// console.log(booleanreturn(10, 2));


// accessing object data

// const cat = {
//     "name" : "meow",
//     age : 5,
//     friends : ["cat1","cat2"],
// }

// const check = cat.name;

// console.log(check);

// let a = [1,2,3,4,5]

// a.push(10);

// console.log(a);


// let myArray = ["a","b","c","d"]

// myArray.pop();

// console.log(myArray);

// let myArray = [1,2,3,4,5]

// myArray.unshift(10);

// console.log(myArray);


// let myArray = ["a","b","c"]

// myArray.splice(1,0); //used to remove

// myArray.splice(2,0, "j","k"); //used to add

// console.log(myArray);

// let myArray = [1,2,3,4]

// let newArray = myArray.slice(1); //can used to specify array index start

// console.log(newArray);


// let a = [4,3,2,1,10]

// a.sort(); //used to sort array

// console.log(a);


// let a = [1,2,3,4]

// a.reverse(); //use to reverse array

// console.log(a);

// let myObject = {
//     name : "john",
//     age : 45
// };

// delete myObject.name;

// console.log(myObject);


// let JohnAge = 25;

// if(JohnAge === 45){
//     console.log("you are old");   // used if and else
// }
// else{
//     console.log("you are young");
// }


// let johnAge = 46;

// if(johnAge === 45){
//     console.log("you are old");
// }
// else if (johnAge >=20 && johnAge <=30){
//     console.log("You are young");
// }                                           // used else if
// else if (johnAge >=10 && johnAge <=19){
//     console.log("You are a child");
// }
// else{
//     console.log("You are too old");
// }


/////////SWITCH statement

// let fruit = "banana";

// switch (fruit){
//     case "Apple":
//         console.log("I bought Apple");
//         break;

//     case "Orange":
//         case "Apple":
//             console.log("I bought Orange");
//             break;
    
//     default :
//         console.log("no fruits found");
            
////////loop

//for loop
//eg:

// let count = 10;

// for (let i=0; i<=10; i++){
//     console.log(i);
// }

//while loop

//eg:

// let count = 1;

// while (count <= 10){
//     console.log(count);
//     count ++;
// }


// let count = 0;

// do {
//     console.log(count);
//     count ++;
// }while (count <= 10);

// looping array using for loop
// let myArray = ["john","Doe","Jacob"]

// for (let i = 0 ; i < myArray.length; i++){
//     console.log(myArray[i]);
// }




//object looping
// let myObj = {
//     firstname : "john",
//     secondName : "Doe",
//     age : 45
// };

// for (let x in myObj){
//     console.log(myObj[x]);
// }


// function myfunction(a,b){
//    const sum = a+b;
//     return sum;
// } just function tryed.

// console.log(myfunction(10,5));

//boolean true or false

// let x = 5;
// let y = 5;
// let z = 6;

// console.log(x==y);

// type of operator used to find the type of a js variable
// console.log(typeof ["fkjef","fhhfh"]);


// function
// function myfunction(a,b){
//     return a*b
// }

// console.log(myfunction(1,2));

//objects

// const myObj = {
//     firstName : "john",
//     secondName : "Doe",
//     age : 40
// };

// console.log(myObj);

// console.log(myObj.firstName); //accessing object -- objectName.propertyName

// console.log(myObj["secondName"]); //accessing object -- objectName["propertyName"]

// object methods

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45,
//     fullName : function(){                         //method..............................................
//         return this.firstName+" "+this.secondName; 
//     }
// };

// console.log(person.fullName())

// object for..in loop in object

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45,
// }

// let text = "";

// for (let x in person){
//     text = text + person[x]+ " ";
// }

// console.log(text);


// adding new properties

// const person = {
//     firstName : "john",
//     secondName : "doe",
//     age : 45
// }

// person.id = 110;

// console.log(person);

// nested arrays and objects


// const person = {
//     firstName : "john",
//     lastName : "doe",
//     age : 15
// }

// console.log(Object.keys(person));  //return property names

// console.log(Object.values(person));   // return property values

// console.log(Object.entries(person));  // return an array containing all property of an keyvalue pairs 


// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// console.log(Object.assign(target,source)); //



//--------------Arrow function---------------------

// normal

// function check (){
//     return "hello world";
// }
// console.log(check());

//eg:arrow

// check = () => "hello world";

// console.log(check());

//eg:arrow

// sum = (a,b) => a + b ;

// console.log(sum(10,12));



