console.clear();

function sum(numbers, total = 0) {
    if (!numbers.length) {
        return total;
    }

    return sum(numbers, total + numbers.pop());
}

console.log(sum([1, 2, 3, 4, 5]));