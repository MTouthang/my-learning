/**
 * Reverse the array - with and without using built-in method
 */
const arr = [1, 2, 3, 4, 5];

const builtReversed = arr.reverse();
console.log(builtReversed);

for (let i = 1; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
console.log(arr);
