type callbackType<T> = (item: T, index: string, array: T[] ) => boolean

function mutableFilter<T>(array: T[], callback: callbackType<T>): T[] {
    let numberOfUnMatch = 0,
        matchIndex = 0;

    for (const index in array) {
        if (callback(array[index], index, array)) {
            array[matchIndex++] = array[index];
        } else {
            numberOfUnMatch++;
        }
    }

    array.length -= numberOfUnMatch;

    return array;
}