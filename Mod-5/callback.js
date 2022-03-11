// callback
let fruits = ["mango", "apple"];

let order = (fruitname, callback_Production) => {
  console.log("order has been placed");
  setTimeout(() => {
    console.log(`${fruits[fruitname]} was selected`);
    callback_Production();
  }, 2000);
};

let production = () => {
  console.log("Production has been started");
  setTimeout(() => {
    console.log("Mango has been chopped");
    setTimeout(() => {
      console.log("Milk has been added");
      setTimeout(() => {
        console.log("Blending has been started");
        setTimeout(() => {
          console.log("Order is ready to served");
        }, 1000);
      }, 2000);
    }, 1000);
  }, 2000);
};

order(0, production);

console.log("This is my statement");