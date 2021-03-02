console.clear()

const a = new Set([1, 2, 3]),
    b = new Set([4, 3, 2]),
    c = new Set([5, 3, 6])

/**
 * @title implementation of union function
 * @param {Set} sets 
 * @return {new Set}
 */
function union(...sets) {
    return sets.reduce((unionSet, set) => {
        for (let value of set) {
            unionSet.add(value)
        }
        return unionSet
    }, new Set())
}

const u = union(a, b, c)
console.log(u)