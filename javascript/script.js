// console.log("Script.js");

// object literal

const user = {
  firstName: "Mr",
  lastName: "Sharma",
  phone: 666262626,
  hobbies: ["Cricket", "book"],
  showDetails: function () {
    console.log(this);
  },
};
// console.log(user.phon);
user.showDetails();

// Construtor function
// Encapsulation : Wrapping up the properties and methods into a single unit is called encapsulation
function Product(productName, productPrice, productDescription) {
  this.productName = productName;
  this.productPrice = productPrice;
  this.productDescription = productDescription;
  this.showProductDetails = function () {
    console.log(
      this.productName + " " + this.productPrice + "" + this.productDescription
    );
  };
}

const product1 = new Product("Iphone x", 70000, "Iphone x was maid M13 chip");
const product2 = new Product("Iphone 12", 100000, "Iphone x was maid M13 chip");
// console.log(product1);
product1.showProductDetails();

// console.log(this);

// function MyFunc() {
//   console.log(this);
// }
// MyFunc();
// console.log(firstName);
var firstName = "Mr";
var firstName = "Mrs";
console.log(firstName);

if (true) {
  //   console.log(isLoginned);
  let isLoginned = true;
}
// console.log(isLoginned);

let email;
// let email = "";
email = "siva@example.com";
console.log(email);

const PI = 3.14;
// PI = 3.15;
