/**
 * Float number verifying
 * @param {number} number 
 * @returns boolean
 */
function isFloat(number) {
    const floatRegex = /^(\d+)\.(\d+)$/;

    if (
        floatRegex.test(number) &&
        typeof number === 'number'
    ) {
        return true;
    }

    return false;
}

console.log(isFloat(19));
console.log(isFloat(19.2));
console.log(isFloat('19.2'));