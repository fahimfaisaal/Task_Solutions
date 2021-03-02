console.clear()

const a = new Set([1, 2, 3]),
    b = new Set([4, 3, 2])

/**
 * @title Implementation of difference function
 * @param {Set} a 
 * @param {Set} b 
 * @return {new Set} difference of a / b of b / a
 */
function difference(a, b) {
    return new Set([...a].filter(number => !b.has(number)))
}

//* a / b
const difference1 = difference(a, b)
console.log(difference1)

//* b / a
const difference2 = difference(b, a)
console.log(difference2)