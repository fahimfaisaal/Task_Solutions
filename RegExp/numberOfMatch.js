/**
 * got the number of match in any String
 * @param {String} mainStr 
 * @param {String} searchStr 
 * @returns number
 */
function numberOfMatch(mainStr, searchStr = null) {
    const regex = new RegExp("\\s(" + searchStr + ")\\s", 'gu');
    const match = mainStr.match(regex);
    
    return match && searchStr ? match.length : 0;
}

const str = 'hello, I am fahim faisal. আমি';

console.log(numberOfMatch(str, 'I am fahim faisal.'));