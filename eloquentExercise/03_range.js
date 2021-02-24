console.clear()

/**
 * @param {Array<number>} arr 
 * @param {function} callback (sum, sub, div, mul)
 * @return {number}
 */
function calculator(arr, callback) {
    const len = arr.length
    let calculate = arr[0]

    for (let i = 1; i < len; i++) {
        calculate = callback(calculate, arr[i], i, arr)
    }

    return calculate
}

/**
 * @param {number} from 
 * @param {number} to 
 * @param {number} step
 * @return {Array<any>}
 */
function range(from, to, step = 1) {
    let arr = new Array()

    for (let number = from; (step < 0) ? number >= to : number <= to; number += step) {
        arr.push(number)
    }

    return arr
}

const arr = range(5, 1, -1)
console.log(calculator(range(1, 10), (sum, number) => sum + number))