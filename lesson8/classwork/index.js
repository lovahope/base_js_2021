// Продвинутая работа с функциями

// var name = "Alex";
// function example() {
//   console.log(this);
// }
// example();
// console.log(GlobalThis);

// const user = {
//   name: "Alex",
//   age: "25",
//   getName: function () {
//     console.log(this.name);
//   },
// };
// user.getName();

function getName() {
  console.log(this.name);
}
const user = {
  name: "Alex",
  age: "25",
  getUserName: getName,
};

const admin = {
  name: "Max",
  age: "45",
  getAdminName: getName,
};
admin.getAdminName();
user.getUserName();
