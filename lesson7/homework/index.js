// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// var vegetableLength = vegetables.map(function (elem) {
//   return elem.length;
// });
// console.log(vegetableLength); // (4) [7, 4, 7, 8]

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

let numbers = [2, 3, 5, 7, 11, 13, 17];

function currentSums(numbers) {
  let result = [];

  numbers.reduce(function (sum, current, i) {
    return (result[i] = sum + current);
  }, 0);

  console.log(result);
}

currentSums(numbers); //(7) [2, 5, 10, 17, 28, 41, 58]

// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {

//  // ваш код

// }

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

// var str = "Каждый охотник желает знать, где сидит фазан.";

// // Ваш код

// foo(array);  // [К,о,ж,з,г,с,ф]

// Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// var str = "JavaScript";

// // Ваш код

// foo(arr); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// var numerics = [5, 7, 2, 9, 3, 1, 8];

// // Ваш код

// foo(numerics); // [9,8,7,5,3,2,1]

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// var a = [1,2,3];
// var b = [4,5,6];
// c = [7,8,9];
// function getArr(a, b, c) {

// // Ваш код

// }

// getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]

// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].