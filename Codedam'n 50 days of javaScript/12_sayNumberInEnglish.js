const spell0To99 = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}

const splitNumber = (number) => {
    const splitNumber = chunk([...number.toString()].reverse(), 3);
    return splitNumber.reduceRight((numberString, chunk) => {
        const chunkString = chunk.reverse().join('');
        return `${numberString}${numberString ? ',' : ''}${chunkString}`;
    }, '');
}

function chunk(array, size) {
    const chunkedArr = [];

    for (let index = 0; index < array.length; index += size) {
        chunkedArr.push(array.slice(index, index + size));
    }

    return chunkedArr;
}

function splitToHundredAndDecade(number) {
    const isZeroRegex = /^0/;
    if (number.length > 2) {
        const decadeNumber = number.substring(1, number.length).replace(isZeroRegex, '');
        const hundredDigit = number[0].replace(isZeroRegex, '');
        return [decadeNumber, hundredDigit]
    }

    return [number.replace(isZeroRegex, '')];
}

function splitToDecadeAndDigit(number) {
    const convertedNumber = Number(number);
    const digit = convertedNumber % 10;
    const decade = convertedNumber - digit;

    return [decade, digit];
}

const makeDecade = (number) => {
    const existDecade = spell0To99[number];
    if (existDecade) {
        return existDecade;
    }
    const [decade, digit] = splitToDecadeAndDigit(number);

    return `${spell0To99[decade]}-${spell0To99[digit]}`;
}

const sayNumberInEnglish = (n) => {
    // Write your solution her
    const existNumber = spell0To99[n]

    if (existNumber) {
        return existNumber;
    }
    
    const splitNumberString = splitNumber(n).split(',');
    const numberUnits = ['', 'thousand', 'million', 'billion', 'trillion'];

    const spellingOfNumber = splitNumberString.reduceRight((spellNumber, number) => {
        const [decadeNumber, hundredDigit] = splitToHundredAndDecade(number);
        const hundredDigitSpelling = hundredDigit ? `${spell0To99[hundredDigit]} hundred` : '';
        const decadeSpelling = makeDecade(decadeNumber);
        const numberUnit = numberUnits.shift()
        
        spellNumber.unshift(`${hundredDigitSpelling} ${decadeSpelling} ${numberUnit}`);
        return spellNumber;
    }, [])

    const spellNumber = spellingOfNumber.join(' ');

    return spellNumber.replace(/zero\s\w+|zero|\s{2,}|^\s|\s$/g, '');
}

console.log(`5635 in english is: ${sayNumberInEnglish(100)}`);