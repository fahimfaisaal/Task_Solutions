function cleanExtraSpaces(string) {
    return string.replace(/\s{2,}/g, ' ');
}

function fixSymbols(string) {
    const symbolFixer = [
        {
            //* Start symbols
            regex: /([\(\{\[@#\^])\s(\w+)/g,
            replace: ' $1$2'
        },
        {
            //* middle symbols
            regex: /(\w+)\s?([%&\*\+<>\|~\/\-])\s?(\w+)/g,
            replace: ' $1 $2 $3 '
        },
        {
            //* end symbols
            regex: /(\w)?\s([,\.\?!;\)\}\]$])/g,
            replace: '$1$2 '
        }
    ]
 
    symbolFixer.forEach(object => {
        string = string.replace(object.regex, object.replace);
    });
  
    return string;
}

function deepTrim(string) {
    const fixSymbolAndSpaces = fixSymbols(cleanExtraSpaces(string));

    return cleanExtraSpaces(fixSymbolAndSpaces).trim();
}

const crushedStr = `   Hello  ,        Everyone    i am(  fahim
    faisal        )    and    i'm    22  . who    are     you    ? i have 1000 $  you know   ? 34>10
   my user name      @    fahimfaisal `;

console.log(deepTrim(crushedStr))