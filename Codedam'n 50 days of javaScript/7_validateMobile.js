const number = '9987654321';

function validateMobile(number) {
    // write your solution here
    const numberValidateRegex = /^((\+91\s?)|0)?\d{1,10}$/

    return numberValidateRegex.test(number);
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
