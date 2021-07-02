console.clear();

const multiArr = [
    1, 2, 3, 4, [
        5, 6, 7, 8, 9, [
            10, 11, 12, 12, 14, [
                15, 16, 17, 18, 19, [
                    20, 21, 22, 23, 24, [
                        25, 26, 27, 28, 29, 30
                    ]
                ]
            ]
        ]
    ]
];

function deepFlat(arr, cb, index = 0) {
    if (arr.length === index) {
        return null;
    }

    if (Array.isArray(arr[index])) {
        deepFlat(arr[index], cb);
    } else {
        cb(arr[index]);
    }

    return deepFlat(arr, cb, index + 1);
}

const oneD = [];

deepFlat(multiArr, item => {
    oneD.push(item);
})

console.log(oneD);