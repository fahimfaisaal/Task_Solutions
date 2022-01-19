function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        const {
            [i]: currentElement,
            [i + 1]: afterCurrentElement
        } = array;

        if (currentElement > afterCurrentElement) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(isSorted([1, 2, 3, 4, 5, 9, 7, 8]));