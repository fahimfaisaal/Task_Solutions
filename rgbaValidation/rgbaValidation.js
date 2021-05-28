function isRgba(rgba) {
    const rgbaRegExp = /^(rgb)a?\(((\d{1,3}), ?){2}(\d{1,3})(, ?((0(\.\d+)?)|(1(\.0+)?)))?\)$/;
  
    if (rgbaRegExp.test(rgba)) {
        const rgbNumbers = rgba
            .split(/[^0-9]/)
            .reduce((rgbaNumbers, number) => {
                number !== '' && rgbaNumbers.push(+number);
                return rgbaNumbers;
            }, []).slice(0, 3);
        
        const isValidNumbers = rgbNumbers.every(number => number > -1 && number < 256);
        
        if (isValidNumbers) {
            return true;
        }
    }
  
    return false;
}

//# valid RGB
console.log(isRgba('rgb(116, 185, 255, 1)')); //* true
console.log(isRgba('rgb(112,122,112)')); //* true
console.log(isRgba('rgba(12, 122,0)')); //* true
console.log(isRgba('rgba(12, 122, 0, 1)')); //* true
console.log(isRgba('rgba(12, 122, 0, 1.0000)')); //* true
console.log(isRgba('rgba(12, 122, 122, 0.23435466)')); //* true
console.log(isRgba('rgb(12, 122, 122, 0.234)')); //* true

//# Invalid RGB
console.log(isRgba('any invalid rgb string')); //* false
console.log(isRgba('rgb(12, 122, 122,)')); //* false
console.log(isRgba('rgb(12, 122, 122, 0.)')); //* false
console.log(isRgba('rgba(-1, 122, 122, 0)')); //* false if any rgb number is less then 0
console.log(isRgba('rgba(122, 256, 122, 0)')); //* false  if any rgb number is greater then 255
console.log(isRgba('rgba(122, 122, 122, 1.01)')); //* false if alpha number is greater then 1
console.log(isRgba('rgba(122, 122, 122, -1)')); //* false if alpha number is less then 0