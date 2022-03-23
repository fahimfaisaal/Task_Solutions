function evenOddDiagonal(n) {
    return new Array(n)
        .fill()
        .map((_, index) => {
            const row = new Array(n).fill('-')
            row[n - index - 1] = (n - index) * 2 - 2 // generate even number via index
            row[index] = index * 2 + 1 // generate odd number via index

            let i = 0;
            while (row[i] === '-') {
                row[i] = 'A'
                row[n - ++i] = 'B'
            }

            return row
        })
}

console.table(evenOddDiagonal(9))

/**
┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │  0  │  1  │  2  │  3  │  4  │  5  │  6  │  7  │  8  │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│    0    │  1  │ '-' │ '-' │ '-' │ '-' │ '-' │ '-' │ '-' │ 16  │
│    1    │ 'A' │  3  │ '-' │ '-' │ '-' │ '-' │ '-' │ 14  │ 'B' │
│    2    │ 'A' │ 'A' │  5  │ '-' │ '-' │ '-' │ 12  │ 'B' │ 'B' │
│    3    │ 'A' │ 'A' │ 'A' │  7  │ '-' │ 10  │ 'B' │ 'B' │ 'B' │
│    4    │ 'A' │ 'A' │ 'A' │ 'A' │  9  │ 'B' │ 'B' │ 'B' │ 'B' │
│    5    │ 'A' │ 'A' │ 'A' │  6  │ '-' │ 11  │ 'B' │ 'B' │ 'B' │
│    6    │ 'A' │ 'A' │  4  │ '-' │ '-' │ '-' │ 13  │ 'B' │ 'B' │
│    7    │ 'A' │  2  │ '-' │ '-' │ '-' │ '-' │ '-' │ 15  │ 'B' │
│    8    │  0  │ '-' │ '-' │ '-' │ '-' │ '-' │ '-' │ '-' │ 17  │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
 */
