console.clear()
const correctTitle = str => 
    str.split(' ').reduce((correctTitle, word) => {
        if (/and|the|in|of/i.test(word)) {
            correctTitle += word.toLowerCase()
        } else {
            for (let i = 0; i < word.length; i++) {
                correctTitle += !i
                    ? word[i].toUpperCase()
                    : word[i].toLowerCase()
            }
        }
        correctTitle += ' '

        return correctTitle
    }, '')

const str = 'JOn SaNS, tHe kInG oF tHe CounTrY'
const result = correctTitle(str)
console.log(str)
console.log('Replace ->', result)
