const correctTitle = str => 
    str.split(' ').reduce((correctTitleArr, word) => {
        let subWord = ''

        if (/and|the|in|of/i.test(word)) subWord += word.toLowerCase()
        else for (let i = 0; i < word.length; i++)
                if (!i) subWord += word[i].toUpperCase()
                else subWord += word[i].toLowerCase()
        
        correctTitleArr.push(subWord)

        return correctTitleArr
    }, []).join(' ')

const str = 'JOn SaNS, tHe kInG oF tHe CounTrY'
const result = correctTitle(str)
console.log(str)
console.log('Replace ->', result)