console.clear()

//* Solution-1 Use eval
function arrayToList(arr) {
    const len = arr.length
    let list = {},
        listStr = "list['rest']"
    
    if (!len) return list
    
    list.value = arr[0]

    for (let i = 0; i < len; i++) {
        if (i !== len - 1) {
            eval(`${listStr} = {value: arr[i + 1]}`)
        } else eval(`${listStr} = null`);

        listStr += "['rest']"
    }

    return list
}

//* Solution-2 use recursion
function arrToList(arr, list = new Object()) {
    return (rest = null) => {
        const arrayToList = arrToList(arr, list)

        if (!arr.length) return list
        if (!rest) list.value = arr.shift()

        return arrayToList(list.rest = {
            value: arr.pop(),
            rest: rest
        })
    }
}

//* Use eval
function listToArray(list) {
    let arr = [],
        valueStr = "list"

    while (true) {
        arr.push(eval(`${valueStr}['value']`))

        if (!eval(`${valueStr}['rest']`)) break
        valueStr += "['rest']"
    }

    return arr
}

const arr = [4, 5, 6]
const list = arrToList(arr)
const array = listToArray(list())

console.log(list())
console.log(array)