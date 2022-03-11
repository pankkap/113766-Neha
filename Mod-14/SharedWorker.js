self.onconnect = function (e) {
  console.log("Worker start Working");
  var port = e.ports[0];

  port.onmessage = (e) => {
    if (e.data[0] && e.data[1]) {
      const result = e.data[0] + e.data[1];
      port.postMessage(result);
    }
  };
};
