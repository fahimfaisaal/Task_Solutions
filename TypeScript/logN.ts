// O(log n) complexity
function logN(length: number, power = 0): number {
    if (length === 0) {
        if (power === 0) {
            return -Infinity;
        }

        return power - 1;
    }

    return logN(~~(length / 2), power + 1);
}