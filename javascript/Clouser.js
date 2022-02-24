const sudoko = [2, 0, 0, 7, 0, 0, 6, 0, 1];
// const sudoko2 = [0,0,2,0,1,0,0,5,0]
// Replace the zeros with remaning numbers
const resultSudoko = [2, 3, 4, 7, 5, 8, 6, 9, 1];
Array.prototype.lastValue = function () {
  return this[this.length - 1];
};
// const a = 30;
function x() {
  const a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

const secondFunc = x();
secondFunc();
//
// [12,13,56,78,12];
const arr = [12, 13, 56, 78, 12, 98, 123];

const value = arr.lastValue();
console.log(value);
