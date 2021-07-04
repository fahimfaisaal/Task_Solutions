console.clear();

function findMax(numbers, max = -Infinity) {
    if (!numbers.length) {
        return max;
    }

    const number = numbers.pop();

    if (number > max) {
        max = number;
    }

    return findMax(numbers, max);
}

console.log(findMax([1, 2, 4, 100, 10, 5, 10]));