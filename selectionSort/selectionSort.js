console.clear();

const unsortedArr = [5, 4, 6, 7, -3, 2, 9, -1];

function select(arr, j, len, max = arr[0], index = 0) {
    if (j === len) {
        return [max, index]
    }

    if (max < arr[j]) {
        max = arr[j];
        index = j
    }

    return select(arr, j + 1, len, max, index);
}

function selectionSort(arr, i = 0, len = arr.length) {
    if (i === len) {
        return arr
    }

    const [max, index] = select(arr, 0, len - i);

    if (max !== arr[len - i - 1]) {
        [arr[index], arr[len - i - 1]] = [arr[len - i - 1], arr[index]];
    }

    return selectionSort(arr, i + 1);
}

console.log(selectionSort(unsortedArr));