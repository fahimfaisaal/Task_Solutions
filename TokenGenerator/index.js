console.clear();

/**
 * Ascii characters generator by start and end length
 * @param {number} start
 * @param {number} end
 * @returns {string}
 */
function asciiCharGenerator(start = 0, end = 255, step = 1) {
    let characters = '';

    for (let i = start; i < end + 1; i += step) {
        characters += String.fromCharCode(i);
    }

    return characters;
}

/**
 * generate token by asciiChars
 * @param {string} asciiChars 
 * @param {number} length 
 * @param {string} token 
 * @returns {string}
 */
function randomCharGenerator(asciiChars, length, token = '') {
    if (!length) {
        return token;
    }

    const randNumber = Math.ceil(
        Math.random() * asciiChars.length
    ) - 1;

    token += asciiChars.charAt(randNumber);

    return randomCharGenerator(asciiChars, length - 1, token);
}

/**
 * Generate a token object
 * @param {number} stringLength 
 * @returns {Object}
 */
function generateToken(variant = 'mid', stringLength) {
    // tokens variants
    const variants = {
        low: {
            range: [101, 122],
            regex: /[\[\\\]\^_`]/g,
            length: 10
        },
        mid: {
            range: [41, 122],
            regex: /[^\d\w]|_/gi,
            length: 20
        },
        hard: {
            range: [41, 126],
            regex: /[;:<==>`\.,]/g,
            length: 25
        }
    }

    // accepter variant of token
    const acceptedVariant = variants[variant] || variants.mid;
    const [start, end] = acceptedVariant.range;

    // ascii characters by selected variant
    const characters = asciiCharGenerator(start, end).replace(acceptedVariant.regex, '');

    // if string length not passed then select default
    stringLength = stringLength ? stringLength : acceptedVariant.length;

    return randomCharGenerator(characters, stringLength);
}

console.log('low:', generateToken('low'));
console.log('medium:', generateToken())
console.log('hard:', generateToken('hard'));