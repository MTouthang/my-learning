/**
 * You have been given an array/list 'ARR' of integers. Your task is to find the second-largest element present in the 'ARR'.

Note:
a) Duplicate elements may be present.

b) If no such element is present return -1.
Example:
Input: Given a sequence of five numbers 2, 4, 5, 6, 8.

Output:  6

 */

// Solution -

/* 1 - first idea approach might fail 
     - incase of repeated array item 
     - how to return -1 condition
*/
const ARR = [2, 8, 4, 5, 6];

// const sortArr = ARR.sort();

// const secondLargest = (arr) => {
//   const sortArr = arr.sort();

//   if (sortArr.length > 2) {
//     return sortArr[sortArr.length - 2];
//   }
//   return -1;
// };

// console.log(secondLargest(ARR));

/**
 * 2. - approach using nested loops
 *    -
 */

const secondLargest = (ARR) => {
  if (ARR.length > 2) {
    for (let i = 0; i < ARR.length - 1; i++) {
      for (let j = i + 1; j < ARR.length; j++) {
        if (ARR[i] > ARR[j]) {
          // swap
          //   let temp = ARR[i];
          //   ARR[i] = ARR[j];
          //   ARR[j] = temp;
          [ARR[i], ARR[j]] = [ARR[j], ARR[i]];
        }
      }
    }
    return ARR[ARR.length - 2];
  }

  return -1;
};

console.log(secondLargest(ARR));
