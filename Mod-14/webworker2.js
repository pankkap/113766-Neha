onmessage = function (e) {
  console.log("Worker Start working");

  if (e.data[0] && e.data[1]) {
    const result = e.data[0] + e.data[1];
    postMessage(result);
  }
};
