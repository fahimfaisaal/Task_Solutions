// sort any array which have beginNumber-N unsorted
/**
 * @param {array} array 
 * @param {number} beginNumber 
 * @returns {array}
 */
function cyclicSort(array, beginNumber = 0) {
  let i = 0;

  while (i < array.length) {
    const correctIndex = array[i] - beginNumber;

    ((array[i] < array.length + beginNumber) && array[i] !== array[correctIndex])
      ? swap(array, i, correctIndex)
      : i++;
  }

  return array;
}

function swap(array, currentIndex, swapIndex) {
  [
    array[currentIndex], array[swapIndex]
  ] =
  [
    array[swapIndex], array[currentIndex]
  ]
}

const array1 = [5, 2, 4, 3, 1];
const array2 = [5, 3, 2, 4];
const array3 = [10, 9, 5, 6, 8];
const array4 = [3, 1, 0, 5, 4];

console.log("start 1 to N", cyclicSort(array1, 1));
console.log("start 2 to N", cyclicSort(array2, 2));
console.log("start 5 to N", cyclicSort(array3, 5));
console.log("start 0 to N", cyclicSort(array4));