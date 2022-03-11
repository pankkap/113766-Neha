// var a = 40;
// var b = 10; // global
// // let c = 50; // local ECMA-6
// const d = 200; // constant variable
// // d = 101;
// // Single Line Comment
// /*
// Multiline Comment
// */

// document.write(c); // Display Purpose
// console.log(a + b); // Debugging Purpose

// // Javascript works in two modes
// // 1. Sloppy modes
// // 2. Strict modes

// // Data Types available in JavaScript

// // String -
// var name = "Pankaj";
// // String -
// var name = "Pankaj";
// // 'this is a message. I am "pankaj"s message '

// // Integer -
// var age = 35;
// // Java Programming (Titly typed language)
// // JavaScript is Loosly Typed Language
// // int age = 25;

// // Boolean  -
// var holiday = false;

// var c = null;
// var c1;
// console.log(c);
// console.log(c1);

// // arithmatic Operator
// // + , -  , *, /, %, ++, --
// x = 10;
// y = 12;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % 3);
// y++;
// console.log(++y); // pre Increment
// x--;
// console.log(--x); // pre Increment
// z = 10;
// z += 2; // z = z + 2
// z -= 2; // z = z - 2
// z *= 2; // z = z * 2
// z /= 2; // z = z / 2
// z %= 2; // z = z % 2
// console.log(z);

// // (Ternary) Operator
// num1 = a < 2 ? "Hello" : "bye";
// console.log(num1);

// // consitional Operator
// // <, >, <=, >=, ==, ===, !=
// num2 = a < 2;
// var data = "2";
// if (data === 2) {
//   console.log("hello");
// } else {
//   console.log("bye");
// }

// // Logical Operator
// num3 = a > 2 && data == 2;
// num3 = a > 2 || data === 2;
// console.log(num3); // true
// console.log(!num3); // false

// var fname = "Pankaj";
// var lname = "kapoor";
// console.log(fname + lname);
// console.log(fname + " " + lname);
// console.log("Hello " + fname + " - " + lname);
// // Template literals ECMA 6
// console.log(`Hello ${fname} - ${lname}`);

// Condition

// if (5 < 2) {
//   console.log("Hello");
// } else if (3 < 2) {
//   console.log("Ok");
// } else {
//   console.log("bye bye");
// }

// var num1 = prompt("Enter Number");
// console.log(typeof num1);
// num1 = parseInt(num1);
// // explicit conversion
// console.log(typeof num1);
// switch (num1) {
//   case 1:
//     console.log("User enter 1");
//     break;
//   case 3:
//     console.log("User enter 3");
//     break;
//   case 5:
//     console.log("User enter 5");
//     break;
//   default:
//     console.log("User enter wrong Input");
//     break;
// }

// Loops
// 1. while

// initialize
// condition
// execute body
// increment|decrement

// let i =1;
// while(i<=10)
// {
//     console.log(i)
//     i++;
// }

// 2. do while
// let i = 1;
// do  {
//   console.log(i);
//   i++;
// }while(i<=10);

// 3. for

// for(let i=10;i>=1;i--)
// {
//     console.log(i);
// }

// Array
var myArr = ["pankaj", "sachin", "akash"];

myArr.push("neha");
myArr.unshift("Alaknanda");
myArr.pop();
myArr.shift()

// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);

// myArr.forEach(function (i) {
//   console.log(i);
// });

// function here is a call function function that will index as parameter and it will point to array index

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
