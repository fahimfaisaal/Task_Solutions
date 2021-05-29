/**
 * split any string
 * @param {any} string 
 * @returns Object
 */
function splitString(string) {
    return {
        length: string.length,
        getUppercase: string.replace(/[^A-Z]/g, ''),
        getNotUppercase: string.replace(/[A-Z]/g, ''),
        getLowercase: string.replace(/[^a-z]/g, ''),
        getNotLowercase: string.replace(/[a-z]/g, ''),
        getUpperLowercase: string.replace(/[^a-z]/ig, ''),
        getDigit: string.replace(/[\D]/g, ''),
        getNotDigit: string.replace(/[\d]/g, ''),
        getSpecialChar: string.replace(/[^\W_]/g, ''),
        getNotSpecialChar: string.replace(/[\W_]/g, '')
    }
}

const string = 'asffdsvd?=+fg  ><df1d3  43sdfdf  g2344345sAdfdf---_+!@#';

const splitStr = splitString(string)

console.log(splitStr.length);
console.log(splitStr.getUppercase);
console.log(splitStr.getNotUppercase);
console.log(splitStr.getLowercase);
console.log(splitStr.getNotLowercase);
console.log(splitStr.getDigit);
console.log(splitStr.getNotDigit);
console.log(splitStr.getSpecialChar);
console.log(splitStr.getNotSpecialChar);