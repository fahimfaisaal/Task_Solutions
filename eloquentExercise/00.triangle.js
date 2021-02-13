console.clear()

function triangle(numOfRow) {
    for (let i = 1; i <= numOfRow; i++) {
        let row = ''
        for (let j = 1; j <= i; j++)
            row += '#'
        
        console.log(row)
    }
}

triangle(7)