/**
 * validate Hex color
 * @param {String} color 
 * @returns boolean
 */
function isHexColor(color) {
    const hexRegExp = /^#([a-f0-9]{6}|[a-f0-9]{3,4})$/i;

    if (hexRegExp.test(color)) {
        return true;
    }

    return false;
}

//* valid color
console.log(isHexColor('#000000'));
console.log(isHexColor('#AFAFAF'));
console.log(isHexColor('#AFAF'));
console.log(isHexColor('#AFA'));

//* Invalid color
console.log(isHexColor('AFA'));
console.log(isHexColor('#AF'));
console.log(isHexColor('#00000'));
