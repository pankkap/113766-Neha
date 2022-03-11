// import { message } from "./Library.js";
// import {displayName} from "./Library.js"
// import {Person} from './Library.js';

// import { message, Person, displayName } from "./Library.js";

import * as Data from './Library.js';
// Data is alias for Data we are recieving

import ImpTask from './Library.js'

console.log(Data.message);

document.getElementsByTagName("h1")[0].innerText = Data.message;

console.log(Data.displayName("Koenig Solutions"));
document.getElementById("Output").innerText =
  Data.displayName("Koenig Solutions");

let p1 = new Data.Person("Pankaj", 30);
p1.details();
let p2 = new Data.Person("Sachin", 25);
p2.details();

ImpTask();