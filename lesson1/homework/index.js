console.log("hello world");

var num = 123; //number
num = "123"; //Изменение переменной
console.log(typeof num);

const userName = "NA"; //string
userName = 345; //Изменение переменной
console.log(typeof userName);

let isUser = false; //boolean
console.log(typeof isUser);

let Zero = null; //null
console.log(typeof Zero);

let X; //undefined
console.log(typeof X);

let newVisitor = {
  name: "Brand", //object
  age: 30,
  bloodType: 2,
};
console.log(typeof newVisitor);
newVisitor.name = 13; //Изменение переменной

x = Symbol("color"); //symbol
console.log(typeof x);

x = BigInt(112345); //bigint
console.log(typeof x);
