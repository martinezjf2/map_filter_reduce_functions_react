var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// var newNumbers = [];

// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newArray = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newArray);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const newPedia = emojipedia.map(function (pedia) {
  return pedia.meaning.substring(0, 100);
});

console.log(newPedia);
