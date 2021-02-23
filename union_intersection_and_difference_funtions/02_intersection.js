console.clear()

const a = new Set([1, 2, 3]),
    b = new Set([4, 3, 2]),
    c = new Set([5, 3, 6])

/**
 * @title Implementation of intersection function
 * @param  {Set} sets
 * @return {new Set} intersection set
 */
function intersection(...sets) {
    const firstSet = [...sets.shift()]

    return firstSet.reduce((intersectionSet, firstSetEl) => {
        sets.every(set => set.has(firstSetEl)) && intersectionSet.add(firstSetEl)
        
        return intersectionSet
    }, new Set())
}

const interSec = intersection(a, b, c)
console.log(interSec)