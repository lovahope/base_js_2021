// Функции
// function helloWorld() {
//   console.log("HelloWorld");
// }
// helloWorld();

// const isUserAuth = true;
// function checkAccess() {
//   if (isUserAuth) {
//     console.log("Доступ есть");
//   } else {
//     console.log("Доступа нет");
//   }
// }

// checkAccess();
// function writeMessage() {
//   if (isUserAuth) {
//     console.log("Привет Пользователь");
//   } else {
//     console.log("Привет Гость");
//   }
// }
// writeMessage();

// Аргументы функции
// function sum (a, b) {
//     console.log(a + b);
// }
// sum(1, 0);
// sum(16, 4);

// Возвращаемое значение

// function getName(name) {
//   console.log(" до return");
//   return name;
//   console.log("после return");
// }

// const userName = getName(Ivan);
// console.log("userName");

// Локальные переменные

// let name = "Alex";

// function getName(userName) {
//   return userName;
// }
// const nameUserOne = getName(name);
// console.log(nameUserOne);

// name = "Ivan";

// const nameUserTwo = getName(name);
// console.log(nameUserTwo);

// let name = "Alex";
// console.log(name, "1");
// function sayHi() {
//   name = "Petr";

//   console.log(name, "function");
// }
// sayHi();

// console.log(name, "2");

// let name = "Alex";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Petr";

//   console.log(userName, "function");
// }
// sayHi();

// console.log(name, "2");

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();

// Чистая функция - одно и тоже значение функции, вызываемой сколько угодно раз

// function sum() {
//   const a = 0;
//   const b = 1;
//   console.log(a + b);
// }
// sum();
// sum();
// sum();
// sum();
// let userName = "Alex";
// function sayHi() {
//   if (userName) {
//     console.log(`Приветствую, ${userName}`);
//   } else {
//     console.log("Приветствую, Гость");
//   }
// }
// sayHi();

// function exp(a, b = 1) {
//   console.log(a ** b);
// }
// exp(2, 2);
// exp(2, 8);
// exp(20);

// const arr = [1, 2, 3, 4, 5];
// let rezfull = 0;
// function sred() {
//   for (i = 0; i < arr.length; i++) {
//     rezfull += i;
//   }
//   return console.log(rezfull / arr.length);
// }
// sred();

// const getString = (str, count) => {
//   for (i = 0; i < count; i++) {
//     console.log(str);
//   }
// };
// getString("Вася", 5);

// let arr = ["а", "у", "e", "ы", "о", "э", "я", "и", "ю"];
// let str = "ы";
// const getFun = (arry, stry) => {
//   for (i = 0; i < arry.length; i++) {
//     if (stry == arry[i]) {
//       return console.log("Гласная");
//     }
//   }
//   return console.log("Согласная");
// };
// getFun(arr, str);
