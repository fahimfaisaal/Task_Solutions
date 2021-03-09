console.clear()

function complement(u, a) {
    return [...u].reduce((complementSet, item) => {
        if (!a.has(item)) {
            complementSet.add(item)
        }
        return complementSet
    }, new Set())
}

const setU = new Set([1, 2, 3, 4, 5])
const setA = new Set([2, 4])

const complementSet = complement(setU, setA)
console.log(complementSet)