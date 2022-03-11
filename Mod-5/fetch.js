const API_URL = "https://jsonplaceholder.typicode.com/users";

// fetch with then and catch
// function getAPIData(url) {
//   fetch(url).then((res) => {return (res.json())})
//   .then((data)=>{console.log(data)})
//   .catch((err)=>{console.log("Can not handle your request")})
// }
// fetch with async and await
let getAPIData = async(url) => {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
};

getAPIData(API_URL);
