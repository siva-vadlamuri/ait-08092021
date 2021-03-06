// const p = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     rejected("The Server is Rejected");
//   }, 2000);
// });

// p.then((msg) => console.log(msg)).catch((err) =>
//   console.log("This is Error Messgae" + err)
// );
// fetch("https://fakestoreapi.com/products/")
//   .then((res) => res.json().then((data) => console.log(data)))
//   .catch((err) => console.log(err));

//   es6 Promise
// ES7 2016

// ASYN and AWAIT

function getProductsData() {}

const fetchData = function () {};

const fetchProductsData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();
  console.log(data);
};

fetchProductsData();

// addEventListener is a method of the window object
// window.addEventListener("load", () => {
  function getProductsData() {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  getProductsData();
  // 
// });
// get the data from the twiter api
function calcTheDiffBetweenDates(date1, date2) {
  const diff = Math.abs(date1 - date2);
  return diff;
}


// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// getProductsData();

// const getProductsData = () => {
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())