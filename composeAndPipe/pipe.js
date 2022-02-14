const compose = require('./compose');
const deepReverse = require('./deepReverse');

function pipe(functionList, ...args) {
  return compose(functionList.reverse(), ...args);
}

module.exports = pipe;
