/**
 *
 * Find the Distance Value Between Two Arrays
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
  let distanceValue = 0;
  for (let i = 0; i < arr1.length; i++) {
    let isDistance = true;
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        isDistance = false;
        break;
      }
    }
    if (isDistance) {
      distanceValue++;
    }
  }
  return distanceValue;
};

export { findTheDistanceValue };

// Sample Tests (use run button to see logs)
console.log(findTheDistanceValue([4, 5, 8], [1, 2, 3], 3)); // Expected Output: 1
console.log(findTheDistanceValue([1, 4, 5, 6], [10, 12, 15], 5)); // Expected Output: 2
console.log(findTheDistanceValue([2, 3, 4], [3, 4, 5], 1)); // Expected Output: 0
