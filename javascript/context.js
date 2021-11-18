// calc(10, 20);
const firstName = "Mr";
const lastName = "srikanth";
// Hoisting : Before decalring function we can call the function

const calc = function (first, second) {
  console.log(first + second);
};

console.log("First");
setTimeout(() => {
  console.log("second");
}, 5000);
console.log("Third");
