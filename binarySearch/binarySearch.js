console.clear()

/**
 * @title Binary Search
 * @param {any} arr 
 * @param {any} el 
 * @param {function} callBack 
 * @param {number} left 
 * @param {number} right 
 * @returns number
 */
function binarySearch(arr, el, callBack, left = 0, right = arr.length - 1) {
    if (left <= right) {
        const mid = parseInt((left + right) / 2)

        if (arr[mid] === el) return mid;

        if (callBack(arr[mid], el)) {
            return binarySearch(arr, el, callBack, mid + 1, right);
        }

        return binarySearch(arr, el, callBack, left, mid - 1);
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

console.log(binarySearch(arr, 10, (a, b) => a < b)) //* For ascending ordered Array
console.log(binarySearch(arr2, 10, (a, b) => a > b)) //* For descending ordered Array