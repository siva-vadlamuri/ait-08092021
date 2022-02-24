// Object Literal
const firstName = "Shiva";
const obj = {
  firstName: "Mr",
  hobbies: ["Music", "Cricket", "Coding"],
  email: "example@example.com",
  phone: 765552111,
  address: "Bangalore",
  getUserDetails: function () {
    return `User firstName is ${this.firstName}
         and hobbies are ${this.hobbies} email is 
        ${this.email} and phone number ${this.phone}`;
  },
};

const userDetails = obj.getUserDetails();
console.log(userDetails);

function User(name, email, phone, address, password) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.password = password;
  this.login = function (email, password) {
    if (this.email === email && this.password === password) {
      alert("Welcome User");
    } else {
      alert("Invalid credentials");
    }
  };
}
const user1 = new User(
  "Prasanth",
  "prasanth@gmail.com",
  888888811,
  "Bangalore",
  "prasanth@123"
);
console.log(user1);
User.prototype.myLogout = function () {
  alert("Logout");
};
// user1.login("prasanth@gmail.com", "prasanth@123");
user1.logout();

const array = [1, 2, 3, 5, 17, 12];
// const arr = new Array(10);
// arr.fill(2);
// arr.pr;
// arr.prototype.lastIndex = function () {
//   console.log(this);
// };
// console.log(array);
// array.prototype.lastItem = function () {
//   console.log(this);
// };
// array.lastItem();

// OOP
Array.prototype.lastItem = function () {
  return this[this.length - 1];
};
Array.prototype.lastItem = function () {
    return this[this.length - 1];
  };
console.log(array.lastItem());
