const str = 'javaScript';

function getTheGapX(str) {
    // write your solution here
    const xFromFirst = str.indexOf('X');
    const xFromLast = str.lastIndexOf('X');

    if (xFromFirst === -1 && xFromLast === -1) {
        return -1;
    }

    if (xFromFirst === -1 || xFromLast === -1) {
        return 0;
    }

    return xFromLast - xFromFirst;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
