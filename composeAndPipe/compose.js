const groupCompose = require('./groupCompose');

function compose([...functionList], ...args) {
  console.log(args)
  if (!functionList.length) {
    return args.length > 1 ? args : args.at();
  }

  const lastFunction = functionList.pop();
  const isGroup = Array.isArray(lastFunction);
  let returnValue;

  if (isGroup) {
    returnValue = groupCompose(lastFunction, ...args);
    return compose(functionList, ...returnValue);
  }

  returnValue = lastFunction(...args);
  return compose(functionList, returnValue);
}

module.exports = compose;