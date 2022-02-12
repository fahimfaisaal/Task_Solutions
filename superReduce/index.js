function isIterableObject(collection) {
  return Symbol.iterator in Object(collection);
}

function isArgumentsObject(collection) {
  return collection.toString() === '[object Arguments]';
}

function isExistIndex(collection) {
  return Array.isArray(collection) || typeof collection === 'string' || isArgumentsObject(collection);
}

/**
 * @param {any} collection any collection in Js
 * @param {*} callback 
 * @param {*} accumulator 
 * @returns accumulator
 */
function superReduce(collection, callback, accumulator, context = this) {
  const isIterable = isIterableObject(collection);
  const haveIndex = isExistIndex(collection);
  let indexOrCollection = haveIndex ? 0 : collection;

  if (isIterable) {
    for (const item of collection) {
      const callbackArgs = [
        accumulator,
        item,
        indexOrCollection,
        collection
      ];

      // if collection have doesn't exist index then it pop the last collection
      haveIndex
        ? indexOrCollection++
        : callbackArgs.pop();

      accumulator = callback.apply(context, callbackArgs);
    }

    return accumulator;
  }

  // if the collection is not iterable
  for (const key in collection) {
    accumulator = callback.call(context, accumulator, key, collection[key], collection);
  }

  return accumulator;
}

// * Test cases
/* const obj = {
  a: 10,
  b: 20,
  c: 31
}

console.log('By Object:', superReduce(obj, (acc, _, value, obj) => {
  console.log(obj)
  return acc + value
}, 0));

const set = new Set([1, 2, 3, 4, 5, 6, 7, 5, 3, 2]);

console.log('By Set:', superReduce(set, (acc, cur, set) => {
  console.log(set)
  return acc + cur;
}, 0))

const map = new Map(Object.entries(obj));

console.log('By Map:', superReduce(map, (acc, [_, value], map) => {
  console.log(map)
  return (acc[value & 1]++, acc);
}, [0, 0]));


const string = 'fahim faisal soikot';

console.log('By String:', superReduce(string, (acc, letter, index, string) => {
  if (/\s/.test(letter)) {
    return acc;
  }
  console.log(index, string)
  return `${acc}${letter}${index === string.length - 1 ? '' : '-'}`;
}, ''));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('By Array:', superReduce(array, (acc, number, index, array) => {
  console.log(index, array)
  return acc + number ** 2;
}, 0)); */

// ! check performance
/* let stringOfNumber = '';
for (let i = 0; i < 1e7; i++) {
  stringOfNumber += ~~(Math.random() * 1000)
}

console.time("String manipulate with super reduce");
superReduce(stringOfNumber, (acc, cur, index) => Number(cur ** 2) + (index ? '-' : '') + acc, '');
console.timeEnd("String manipulate with super reduce");

console.time("String manipulate with builtin reduce");
stringOfNumber.split('').reduce((acc, cur, index) => Number(cur ** 2) + (index ? '-' : '') + acc, '');
console.timeEnd("String manipulate with builtin reduce"); */