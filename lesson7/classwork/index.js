// ДЗ 15
// const str = "String Random";
// const subStr = "Random";

// String.prototype.endsWith = (str, substr) => {
//   const findStr = String(str.match(/(\S+)$/g));
//   if (substr === findStr) {
//     return true;
//   }
// };
// console.log(String.prototype.endsWith(str, subStr));

// ДЗ 16

// const str = "Астрономия - наука о небесных телах";

// const getSubstr = (str, char, pos) => {
//   if (pos === "до") {
//     return str.slice(0, char);
//   } else if (pos === "после") {
//     return str.slice(char);
//   } else {
//     return "Error";
//   }
// };
// console.log(getSubstr(str, 10, "после"));

// ДЗ 19

// const str = "Астрономия - наука о небесных телах";

// const count = (str, strSymbol) => {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === strSymbol) {
//       count += 1;
//     }
//   }
//   return count;
// };

// МАССИВЫ

// const arr1 = new Array(4, 5, 66, 8, 9);
// console.log(arr1.length);

// const arr2 = new Array(4);
// console.log(arr2.length);

// const arr3 = [1, 2, 3, 4, 5];
// console.log(arr3);
// arr3[0] = 10;
// console.log(arr3);

// const arr = [];
// const testLength = arr.push;

// копирование объектов

// const obj1 = {a: "Hello"};
// const obj11 = {b: "Hello Alex"};
// const obj2 = Object.assign({}, obj1, obj11);
// console.log(obj1, obj2);
// obj1.a= "Goodbye";
// console.log(obj1, obj2);

// const obj1 = {
//   sayHello: "Hello",
//   user: { name: "Alex", age: { date: "28", year: "1996", month: "03" } },
// };

// const obj2 = Object.assign({}, obj1);
// console.log(JSON.stringify(obj1));
// const obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = "2021";

// console.log(obj1.user, obj2.user);

// spred оператор

// const arr1 = [1, 2, 3, 4];

// const arr2 = [7, 8, 9];

// const arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);

// const obj1 = { name: "Alex", age: "25" };

// const obj2 = { ...obj1, name: "Max" };

// console.log(obj1, obj2);
// obj1.name = "Ivan";
// console.log(obj1, obj2);

//  REST ОПЕРАТОР

// const getSum = (a, b, ...args) => {
//   console.log(args);
// return
// };
// getSum(1, 2, 3, 4);

// функция, которая первым аргументом принимает действие (суммаб вычитание) после принимает параметры для

// const getSum = (type, ...args) => {
//   if (type === "sum") {
//     //   сумма
//     console.log(Array.isArray(args), "sum");
//   } else {
//     //   вычитать
//     console.log(args, "negative");
//   }
// };
// getSum("sum", 1, 2, 3, 4, 5, 6, 78, 9, 0);

// Перебор значений массива

// const arr = [1, 2, 3, 4];
// for (let elem of arr) {
//   console.log(elem);
// }

// // старый вариант кода
// for ( let i = 0; i < arr.length; i +=1){
//     console.log(arr[i]);
// }

// Перебор значений объекта

// const obj = { a: 1, b: 2 };
// for (let elem in obj) {
//   console.log(obj[elem]);
// }

// ПРАКТИКА
// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.
// let obj = {
//   a: 1,
//   b: 2,
// };
// let objCopy = Object.assign({}, obj);
// console.log(objCopy);

// Написать функцию  которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).

// const someArgs = (...args) => {
//   let result = 0;
//   for (let el of args) {
//     if (el % 2 === 0) {
//       result += el;
//     }
//   }
//   return result;
// };
// console.log(someArgs(1, 2, 3, 4, -6, 2, 8, 9));

// Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только  те значения которые есть и в первом и во втором массиве.

// const getCommonValue = (arr1, arr2) => {
//   const result = [];
//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
//   return arr1.filter((el) => arr2.includes(el));
// };
// console.log([1, 2, 3, 4, 5, 5, 4], [6, 5, 4]);
