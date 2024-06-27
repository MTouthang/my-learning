/**
 * Get the length of the array with or without built-in method
 */

// hints - for..of, reduce, recursion

const ARR = [1, 3, 4, 5, 7, 8];

// built-in function
console.log("builtin", ARR.length);

// using for of
let length = 0;
for (const item of ARR) {
  length += 1;
}

console.log("array length with for...of ", length);

console.log(
  "with reduce function",
  ARR.reduce((count) => count + 1, 0)
);

// recursion
const findLength = (arr, count = 0) => {
  if (ARR[count] == undefined) {
    return count;
  }

  return findLength(arr, count + 1);
};

console.log("In recursive manner", findLength(ARR[0]));
