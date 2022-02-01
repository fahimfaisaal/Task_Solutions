function move<T>(array: T[], to: number, from: number): T[] {
    const deletedTo: T = array.splice(to, 1)[0];
    array.splice(from, 0, deletedTo);

    return array;
}

console.log(move([1, 2, 3, 4, 5], 0, 2));