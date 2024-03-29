console.clear()

const a = new Set([1, 2, 3]),
    b = new Set([4, 3, 2]),
    c = new Set([5, 3, 6])

/**
 * @title implementation of union function
 * @param {Array} sets 
 * @return {new Set}
 */
function union(...sets) {
    return new Set(
        sets.reduce((flatArray, set) => flatArray.concat(Array.from(set)), [])
    )
}

const u = union(a, b, c)
console.log(u)