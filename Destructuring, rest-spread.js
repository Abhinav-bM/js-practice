// Destructuring

// Array
let number = [1, 2, 3, 4, 5, 6]

let [num1, num2, num3] = number

let [, , , ,] = number

// console.log(num5);

let numbers = [1, 2, 3, 4, [5, 6]]
let [, , , ,[num5, num6]] = numbers

console.log(num5);

// object
const cars = {
    brand : "BMW",
    model : 2017,
    colorprice : {
        red : 3500000,
        blue : 3000000,
    }
}

let {brand, model, } = cars


console.log(brand);