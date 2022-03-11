function makepromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;  // CALL API
      if (error) {
        reject();
      } else {
        resolve();
      }
    }, 2000);
  });
}

makepromise()
  .then((data) => console.log("Promise Done..!!"))
  .catch((err) => console.log("Pormise Rejected...!!"));
