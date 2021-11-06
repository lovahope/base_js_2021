// let num1 = 1;
// let num2 = num1;
// console.log(num1, num2);

// num1 = 2;
// console.log(num1, num2);

// const obj1 = {
//     name = "Alex",
// };
// const obj2 = obj1;

// console.log(obj1, obj2);

// obj1.name = "IVAN";

// console.log(obj1, obj2);

// const obj = {};
// obj.true = 1;
// console.log(obj);

// const obj = {};
// console.log(obj);
// obj.age = "12";
// obj["name-user"] = "Ivan";
// console.log(obj);
// console.log(obj.age, obj["name-user"]);

// obj.age = "18";
// obj["name-user"] = "Max";
// console.log(obj);

// Удаление св-в объекта

// console.log(obj.age);
// delete obj.age;

// console.log(obj);
// console.log(obj.age);

// const obj = {
//   sayHi: function (name) {
//     console.log("Hi User", name);
//   },
// };

// obj.sayHi("Max");

// obj.getName = function (){
// console.log("name");
// };
// console.log(obj);

// let myFavoritFilm = {
//     name: "The Thing",
//     productionYear: 1982,
//     contry: "США",
//     director: "John Carpenter",
//   };
//   myFavoritFilm.proceeds = "$19 629 760";
//   myFavoritFilm.getname = () => console.log(`${myFavoritFilm.name}`);
//   console.log(myFavoritFilm);
//   myFavoritFilm.getname();
//   delete myFavoritFilm.productionYear;
//   console.log(myFavoritFilm);

// const str = "string";
// console.log(str);
// str[0] = "S";
// console.log(str);

// Реализовать функцию которая будет принимать числовой диапазон в качестве параметров [min, max] и будет возвращать случайное целое число из данного диапазона.

// const getRandomNumber = (min, max) => {
//   const rand = Math.random() + max;
//   const result = min + rand;
//   return Math.round(result);
// };
// console.log(getRandomNumber(1, 100));

// Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false
// const getRegistr = (str, n) => {
//   if (n > str.length) {
//     console.log("неверные параметры задачи");
//     return;
//   }
//   if (str[n] === str[n].toUpperCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// getRegistr("Ivan LEXA", 3);

// Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.
// const customReplaceAll = (str, find, replaceStr) => {
//   str = str.replace(find, replaceStr);
//   if (str.includes(find)) {
//     return customReplaceAll(str, find, replaceStr);
//   } else {
//     return str;
//   }
// };
// console.log(customReplaceAll("hi is you, hi its me", "Hi", "Hello"));
