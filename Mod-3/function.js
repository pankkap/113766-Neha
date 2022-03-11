// basics of Function
// function myFun(x,y)
// {
//     console.log("This is Function in JavaScript");
//     return x+y;
// }

// var result = myFun(5,10);
// console.log(result);

// Function as a variable
var hi = function () {
  console.log("This is Variable Function");
};
hi();

var hello = (x) => {
  console.log("This is Arrow Function");
  return x * x;
};
console.log(hello(5));

myArr = [1, 2, 3, 4, 5];
myArr.forEach((element) => {
  console.log(element);
});

// One line function
var hello1 = (x) => console.log(x * x);
hello1(5);

// self invoking Function
(function () {
  console.log("This is Self Invoking Function");
})();
