console.clear();

function isPalindrome(str) {
    if (!str.length || str.length === 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substr(1, str.length - 2));
    }

    return false;
}

const palindromeWord = 'aba';

console.log(isPalindrome(palindromeWord));