console.clear();

function decimalToBinary(decimal, binary = '') {
    if (!decimal) {
        return binary;
    }
    return decimalToBinary(
        Math.floor(decimal / 2),
        decimal % 2 + binary
    );
}

const decimal = 503;
const binary = decimalToBinary(decimal);

console.log(binary);