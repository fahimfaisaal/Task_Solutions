console.clear()

/**
 * @param {number} num
 * @return {number} minimum number
 */
function min(...num) {
    const len = num.length
    let minimum = Infinity

    for (let i = 0; i < len; i++) {
        if (minimum > num[i]) minimum = num[i]
    }

    return minimum
}

console.log(min(12, 22, 32, 1))