function formatString(string) {
    const formatRexExps = [
        {
            //* Start symbols
            regex: /([\(\{\[@#\^])\s+(\w+)/g,
            replace: ' $1$2'
        },
        {
            //* middle symbols
            regex: /(\w+)(\s+)?([%&\*\+<>\|~\/\-])(\s+)?(\w+)/g,
            replace: ' $1 $3 $5 '
        },
        {
            //* end symbols
            regex: /(\w)?\s+([,\.\?!;:\)\}\]$])/g,
            replace: '$1$2 '
        },
        {
            //* clean extra spaces
            regex: /\s{2,}/g,
            replace: ' '
        }
    ];
 
    formatRexExps.forEach(object => {
        string = string.replace(object.regex, object.replace);
    });
  
    return string.trim();
}

const crushedStr = `   Hello  ,        Everyone    i am(  fahim
    faisal        )    and    i'm    22  . who    are     you    ? i have 1000 $  you know   ? 34>10
   my user name      @    fahimfaisal `;


const formatStr = formatString(crushedStr);
console.log(formatStr);