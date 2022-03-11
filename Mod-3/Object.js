var person = {
  name: "pankaj",
  age: 35,
  salary: 50000.0,
};
console.log(person);
// console.log(person.age);
// console.log(person.name);

// var data = [
//   {
//     name: "pankaj",
//     age: 35,
//     salary: 50000.0,
//   },
//   {
//     name: "manish",
//     age: 35,
//     salary: 50000.0,
//   },
//   {
//     name: "sachin",
//     age: 35,
//     salary: 50000.0,
//   },
// ];
// // console.log(data[1].name);
// // Access array of Objects
// data.map((i)=>{
//     console.log(i);
// })

// server can only understand the data in string

// Convert JSOn data into String
var stringData = JSON.stringify(person);
console.log(stringData);

var jsonData = JSON.parse(stringData);
console.log(jsonData);

// convert string data back to JSON data
