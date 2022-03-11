// Self Invoking Function
// Immediate functions

(function (x, y) {
  let z = x + y;
  console.log(z);
})(10, 15);
console.log(z);

// Namspaces
let Bike = {
  Engine: function () {
    console.log("This is Bike Engine");
  },
};

let Car = {
  Engine: function () {
    console.log("This is Car Engine");
  },
};

Car.Engine();
Bike.Engine();

// Strict Mode
("use strict");

{
  // a = 10;
  let a = 20;
  console.log(a);
}
console.log(a);

// JSON
let data = {
  name: "pankaj",
  age: 30,
};
console.log(data);
let stringData = JSON.stringify(data);
console.log(stringData);

console.log(Math.pow(2, 3));
console.log(Math.round(3.16754333));

let a1 = "pankaj";
console.log(isNaN(a1));
