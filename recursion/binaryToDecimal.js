console.clear();

function binaryToDecimal(binary, decimal = 0, base = 1) {
  binary = binary + '';

  if (!binary.length) {
    return decimal;
  }

  const lastDigit = +binary[binary.length - 1];
  const remainBinary = binary.substr(0, binary.length - 1);

  if (lastDigit) {
    decimal += base;
  }

  return binaryToDecimal(remainBinary, decimal, base * 2);
}

const binary = '101';
const decimal = binaryToDecimal(binary);

console.log(decimal);