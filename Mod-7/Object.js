// What is Object ?
// Object is entity that has properties and behaviour.

// let person = {
//   // properties
//   name: "pankaj",
//   age: 30,
//   salary: 10000,

//   // methods
//   display: function () {
//     console.log(
//       `Name: ${this.name} \nAge:${this.age}  \nSalary:${this.salary}`
//     );
//   },
// };

// console.log(person.name);
// person.display()

// let person1 = {
//   // properties
//   name: "sachin",
//   age: 20,
//   salary: 20000,

//   // methods
//   display: function () {
//     console.log(
//       `Name: ${this.name} \nAge:${this.age}  \nSalary:${this.salary}`
//     );
//   },
// };
// person1.display();

// Create Object using Class ES5 Syntax

// constructor
// const Account = function(id, name)
// {
//     // properties
//     this.id = id;
//     this.name = name;
// }

// // create shared function
// Account.prototype = {
//     displayData:function()
//     {
//         console.log(`Id: ${this.id} \nName:${this.name}`);
//     }
// }

// let person1 = new Account(101, "pankaj");
// let person2 = new Account(102, "sachin");
// // console.log(person1);
// // console.log(person2);
// person1.displayData();
// person2.displayData();

// ES5 based concepts
// const Account = function (id, name) {
//   // properties
//   this.id = id;
//   this.name = name;
//   this.balance = 0;
//   this.NoofTrans = 0
// };

// // create shared function
// Account.prototype = {
//   deposite: function (amount) {
//     this.balance += amount;
//     this.NoofTrans++;
//   },
//   widhraw: function (amount) {
//     this.balance -= amount;
//     this.NoofTrans++;
//   },
//   showData: function () {
//     console.log(
//       `Id: ${this.id} \nName:${this.name} \nBalance:${this.balance} \nNo. of Transactiosn:${this.NoofTrans}`
//     );
//   },
// };

// let person1 = new Account(101, "pankaj");
// person1.deposite(500);
// person1.deposite(1500);
// person1.showData()
// person1.widhraw(1000)
// person1.showData();

// Create Objects Reference using Object.create()
// from previously created Object

// let person = {
//   // properties
//   name: "pankaj",
//   age: 30,
//   salary: 10000,

//   // methods
//   display: function () {
//     console.log(
//       `Name: ${this.name} \nAge:${this.age}  \nSalary:${this.salary}`
//     );
//   },
// };

// let p1 = Object.create(person);
// console.log(p1);
// p1.name = "Manish Kumar";
// p1.age = 35;
// p1.salary = 20000;
// console.log(p1);

// Inheritance concept used ES5

// // Base Class
// let Person = function(name, age)
// {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = {
//     haveBirthday:function()
//     {
//         this.age++;
//     }
// }

// // Derived Class
// let Student = function(name, age, country)
// {
//     this.name = name;
//     this.age = age;
//     this.country = country;
// }
// // Implement the concept of Inheritance with ES5
// Student.prototype = new Person();
// let Stu1 = new Student("Puspa", 25, "SouthIndian");
// console.log(Stu1);
// Stu1.haveBirthday();
// console.log(Stu1);

// Implementing Encapsulation in ES5

// let Person = function (name, age) {
// //
//   var name = "Puspa";
//   this.age = age;
//   this.dispName = function()
//   {
//       return name;
//   }
// };

// let p1 = new Person(30);
// console.log(p1);
// console.log(p1.dispName());
// p1.name="hello";
// p1.age = 50;
// console.log(p1.dispName());
// console.log(p1);

// let Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// generic Funtion
// function setName(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let p1 = new Person("sachin", 20);
// // setName("manish", 30);
// setName.apply(p1,["manish", 30]);
// console.log(p1);

// ES2015 ---> ES6
// Before ES2015 -----> ES5

// ES6 concepts Class | Objects

class Account {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  display() {
    console.log(`Name: ${this.name} \nId: ${this.id} `);
  }
}

let obj1 = new Account("Pankaj", 101);
console.log(obj1);
let obj2 = new Account("Sachin", 102);
console.log(obj2);

class Student extends Account {
  constructor(name, id, subject) {
    super(name, id);
    this.subject = subject;
  }
  dispSubject() {
    console.log(`Subject: ${this.subject}`);
  }
}

let stu1 = new Student("Rishab", 102, "Coding");
stu1.display();
stu1.dispSubject();
