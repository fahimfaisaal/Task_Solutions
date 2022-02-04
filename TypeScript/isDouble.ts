function isDouble<T>(array: T[]) {
    return new Set<T>(array).size !== array.length;
}

console.log(isDouble([1, 2, 3, 4, 5, 6]));