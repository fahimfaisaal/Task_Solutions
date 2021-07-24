console.clear();

function reverseString(str) {
    if (!str.length) {
        return '';
    }

    return reverseString(str.substr(1)) + str[0];
}

function reverseStringByArr([...str]) {
    if (!str.length) {
        return '';
    }

    return str.pop() + reverseString(str);
}

const str = 'hello world';
const reverseStr = reverseString(str);

console.log(reverseStr);