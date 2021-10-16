const doublingSequence = (base, length) => {
    const numbers = [Math.pow(base, 0)];

    while (length--) {
        numbers.push(base);

        base *= 2;
    }

    return numbers;
}
/**
 * any number converted to digital root; as like -> 56; 5 + 6 = 11; 1 + 1 = 2;
 * @param {number} num 
 * @returns {Object}
 */
const digitalRoot = (num) => {
    if (num === undefined) {
        return {};
    }

    const splitNum = [...("" + BigInt(num))]; // split number to arr of string
    const rootObjStruct = { result: 0n, calculation: '' };

    // create root object with two properties like { result: number(the digital root of num), calculation: string(representing the calculation process)}
    const rootObj = splitNum.reduce((acc, cur, index) => {
        acc.result += BigInt(cur);
        acc.calculation += `${cur}${index === splitNum.length - 1 ? '' : ' + '}`; // calculation String

        return acc;
    }, rootObjStruct);

    rootObj.result = rootObj.result.toString();
    rootObj.calculation += ` = ${rootObj.result};`;

    if (rootObj.result > 9) {
        // if result is greater then 9 then again split the number
        const splitResult = digitalRoot(rootObj.result);
        rootObj.result = splitResult.result;
        rootObj.calculation += (' ' + splitResult.calculation); // join the new calculation string with previous calculation

        return rootObj;
    }

    return rootObj;
}

const seq = doublingSequence(2, 18);

const obj = seq.reduce((acc, cur) => {
    acc[cur] = digitalRoot(cur);
    return acc;
}, {})

console.log(JSON.stringify(obj, null, 2));
