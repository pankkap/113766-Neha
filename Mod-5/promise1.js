let is_shop_open = false;

let order = (time, work) => {

  new Promise((resolve, reject) => {

    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Sorry shop is not opened");
    }
  });
};

order(2000, () => console.log("Mango was selected"));
