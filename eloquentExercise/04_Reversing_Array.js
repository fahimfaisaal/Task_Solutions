console.clear()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * @param {Array<any>} arr 
 * @return {Array<any>} (Immutable reverse array)
 */
function reverseArray(arr) {
    let newArr = new Array()

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    return newArr
}

const newReverseArray = reverseArray(arr)
console.log(newReverseArray)

/**
 * @param {Array<any>} arr 
 * @return {Array<any>} (mutable reverse array)
 */
function reverseArrayInPlace(arr) {
    const len = arr.length / 2

    for (let i = 0; i < len; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
    }

    return arr
}

console.log(reverseArrayInPlace(arr))
