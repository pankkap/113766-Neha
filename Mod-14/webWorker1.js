onmessage = function(e)
{
    console.log("Worker has Started the Work");
  let result = 0;
  for (var i = 0; i <= 10000000000; i++) {
    result += i;
  }
  postMessage(result);

}  

