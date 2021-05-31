/**
 * Float number verifying
 * @param {number} number 
 * @returns boolean
 */
function isFloat(number) {
    const floatRegex = /^(\d+)?\.(\d+)$/;

    if (
        floatRegex.test(number) &&
        typeof number === 'number'
    ) {
        return true;
    }

    return false;
}

console.log(isFloat(19));
console.log(isFloat(123.2332));
console.log(isFloat(.2332));
console.log(isFloat('19.2'));