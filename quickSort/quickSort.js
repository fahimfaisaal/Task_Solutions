console.clear();

function partition(array, pivot, direction, len = array.length, partitionArr = []) {
    if (!len) {
        return partitionArr;
    }

    const currentNumber = array[len - 1];

    if (direction === 'left') {
        (pivot >= currentNumber) &&
            partitionArr.push(currentNumber);
    } else {
        (pivot < currentNumber) &&
            partitionArr.push(currentNumber);
    }

    return partition(array, pivot, direction, len - 1, partitionArr);
}

function quickSort(array = [], len = array.length) {
    if (len < 2) {
        return array;
    }

    const pivot = array.splice(parseInt(len / 2), 1);

    const lessThanPivot = partition(array, pivot, 'left');
    const greaterThanPivot = partition(array, pivot, 'right');

    return [...quickSort(lessThanPivot), ...pivot, ...quickSort(greaterThanPivot)];
}

const arr = [-2, 5, 1, 2, 3, 7, 5, -1, -5, 100];

console.log('Unsorted Array:', arr)
console.log('Sorted Array (Quick Sort):', quickSort(arr))