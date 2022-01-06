const obj = { key: 1 };

function isEmpty(obj) {
    // write your solution here

    return Object.keys(obj).length ? false : true;
}

console.log(`is empty object: ${isEmpty(obj)}`)
