function stripComments(code) {
    const validComments = /(\/\/.*)|(\/\*)[^]*(\*\/)|(<!--[^]*-->)/g;
    return code.replace(validComments, '');
}

const jsCode = `// here from start code
/**
 * Float number verifying
 * @param {number} number 
 * @returns boolean
 */
function isFloat(number) {
    const floatRegex = /^(\d+)\.(\d+)$/;

    if (
        floatRegex.test(number) &&
        typeof number === 'number'
    ) {
        return true;
    }

    return false;
}`

const cssCode = `/* Sign-up from*/
:root {
  --container-color: #ecf0f1;
  --form-bg-color: #dcdde1;

  --primary-color: #2980b9;
  --fill-color: #10ac84;
  --error-color: #c0392b;
}

body {
  background-color: #2980b9;
}`

const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        hello i am html code.
        please save me from stripComments 😓
     -->
     <h1>Hello cleanComments</h1>
</body>
</html>`

console.log(stripComments(htmlCode))
console.log(stripComments(cssCode))
console.log(stripComments(jsCode));