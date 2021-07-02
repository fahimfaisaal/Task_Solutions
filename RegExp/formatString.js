function formatString(string) {
    const formatRexExps = [
        {
            //* Start symbols
            regex: /([\(\{\[@#\^])\s+(\w+)/g,
            replace: ' $1$2'
        },
        {
            //* middle symbols
            regex: /(\w+)\s*([%&\*\+<>\|~\/=\-])\s*(\w+)/g,
            replace: ' $1 $2 $3 '
        },
        {
            //* middle symbols on word
            regex: /([a-z]+)\s*([\_\-])\s*([a-z]+)/g,
            replace: ' $1$2$3 '
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
    faisal        )    and    i'm    22  . who   are     you    ? i have 1000 $      you know   ? 34 >10
   my user name      @    fahimfaisal fahim    -    faisal  10-20`;


const formatStr = formatString(crushedStr);
console.log(formatStr);