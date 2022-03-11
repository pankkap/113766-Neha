const API_URL = "https://jsonplaceholder.typicode.com/users";

function getAPIData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // creating instance HTML4
      var request = new XMLHttpRequest();

      // call to the server
      request.open("GET", url);

      // send request to the server
      request.send();

      //handle server data
      request.onload = () => {
        console.log(request);
        if (request.status == 200) {
          resolve(request.response);
        } else {
          reject("can not load data");
        }
      };
    }, 2000);
  });
}

getAPIData(API_URL)
  .then((res) => displayAPIData(JSON.parse(res)))
  .catch((err) => console.log(err));

function displayAPIData(serverData) {
  console.log(serverData);
  for (let user of serverData) {

    let tr = document.createElement('tr');
    
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');


    td1.innerText = `${user.id}`; 
    td2.innerText = `${user.name}`; 
    td3.innerText = `${user.username}`; 
    td4.innerText = `${user.email}`; 

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("myTable").appendChild(tr);


  }
}
