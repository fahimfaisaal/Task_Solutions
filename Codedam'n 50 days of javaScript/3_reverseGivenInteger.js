const num = 3849;

function reverseGivenInteger(num, result = 0) {
    // write your solution here
    if (num === 0) {
        return result;
    }

    const lastDigit = num % 10;
    const withoutLastDigit = parseInt(num / 10);

    return reverseGivenInteger(withoutLastDigit, result * 10 + lastDigit);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);