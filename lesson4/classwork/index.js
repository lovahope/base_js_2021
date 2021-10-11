// if (true) {
//   console.log("TRUE");
// }
// if (0) {
//   console.log("false");
// }
// console.log("start");
// const value = -5;
// if (value > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// console.log("finish");
// console.log("start");
// const value = 0;
// if(value === 0){
//     console.log(value, "=value");
// }else if(value>1){
//     console.log(value,">1");
// }else if(value<-1);{
//      console.log(value," <-1");
//  }else{
//      console.log(value);
// }
//  console.log(finish);
// const age = 20;
// const result = age >= 18 ? "Доступ разрешен" : "Доступ запрещен";
// console.log(result);

// const name = "Alex";
// switch ("Mary") {
//   case "Ivan":
//     console.log("IVAN");
//     break;
//   case "Alex":
//     console.log("ALEX");
//     break;
//   case "Max":
//     console.log("MAX");
//     break;
//   default:
//     console.log("Имя нет в списке");
// }

// switch ("Ivan") {
//   case "Ivan":
//     console.log("IVAN");
//     break;
//   case "Alex":
//     console.log("ALEX");
//     return;
//   case "Max":
//     console.log("MAX");
//     return;
//   default:
//     console.log("Имя нет в списке");
// }
// console.log("FINISH");

// Длина наибольшего отрезка
// console.log("START");
// const a = 39;
// const b = 6;              РАЗОБРАТЬ ДОМА
// const c = 89;
// a>b ?

// Задание 3
// const userRole = "Admin";

// switch ("userRole") {
//   case "Admin":
//     console.log("birthday");
//     break ;

//   case "Manager":
//     console.log("perfectColor");
//     break;

//   case "User":
//     console.log("bestDrink");
//     break;
//   default:
//     console.log("no info");
// }

// Логическое "ИЛИ"

// const a = 0;
// const b = 1;
// const result1 = a || b;
// console.log(result1);
// const a = 100;
// const b = 1;
// const result1 = a || b;
// console.log(result1);

// const a = 0;
// const b = 1;
// const result = a && b;
// console.log(result);
// const a = 10;
// const b = " ";
// const result = a && b;
// console.log(result);

// Задача с отрезками
// const a = 1;
// const b = 2;
// const c = 3;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// Цикл “while”

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 1;
// }
// let i = 0;
// do {
//   console.log("WORK");
// } while (i);
// console.log();

// задача 1

// let N = "hello wolrd";
// for (let i = 0; i < 100; i++) {
//   console.log(N);
// }
// let N = "hello wolrd";
// let i = 0;
// while (i < 10) {
//   console.log(N);
//   i += 1;
// }

// задача 2
let N = 100;
let M = 25;

for (let i = 1; N >= M; N = N / 2) {
  console.log(N);
  i += 1;
  console.log(i);
}
