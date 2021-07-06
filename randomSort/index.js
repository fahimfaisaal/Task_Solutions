console.clear();

const arr = [5, 3, 1, 2, 6, 4, 9];

function randomSort(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

setInterval(() => {
    console.log(randomSort(arr));
}, 1000)