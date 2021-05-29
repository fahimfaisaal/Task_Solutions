/**
 * got the number of match in any String
 * @param {String} mainStr 
 * @param {String} searchStr 
 * @returns number
 */
function numberOfMatch(mainStr, searchStr = null) {
    const regex = new RegExp(searchStr, 'g');
    const match = mainStr.match(regex);
    
    return match && searchStr ? match.length : 0;
}

const str = 'hello, I am fahim faisal.';

console.log(numberOfMatch(str, 'a'));