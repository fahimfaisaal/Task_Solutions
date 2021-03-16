console.clear()

const correctTitle = str => 
    str.split(' ').reduce((correctTitle, word) => {
        if (/and|the|in|of/i.test(word)) {
            correctTitle += word.toLowerCase()
        } else {
            for (
                let letter = 0, len = word.length;
                letter < len;
                letter++
            ) {
                correctTitle += !letter
                    ? word[letter].toUpperCase()
                    : word[letter].toLowerCase()
            }
        }
        correctTitle += ' '

        return correctTitle
    }, '')

const str = 'JOn SaNS, tHe kInG oF tHe CounTrY'
const result = correctTitle(str)

console.log('Input ->', str)
console.log('Replace ->', result)
