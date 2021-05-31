
function deepTrim(string) {
    return string.replace(/\s{2,}/g, ' ').trim();
}

const multiSpaceStr = `   Hello,        Everyone      i am  fahim
    faisal    and i am    22        `;

console.log(deepTrim(multiSpaceStr))