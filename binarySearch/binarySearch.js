console.clear()

function binarySearch(arr, el, left = 0, right = arr.length - 1) {
    if (left <= right) {
        const mid = parseInt((left + right) / 2)

        if (arr[mid] === el) return mid;

        if (arr[mid] < el) {
            return binarySearch(arr, el, mid + 1, right);
        }

        return binarySearch(arr, el, left, mid - 1);
    }

    return -1;
}

const arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]
console.log(binarySearch(arr, 10))