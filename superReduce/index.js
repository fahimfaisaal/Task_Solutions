
function isIterableCollection(collection) {
  return Symbol.iterator in Object(collection);
}

function isArguments(collection) {
  return collection.toString() === '[object Arguments]';
}

function isExistIndex(collection) {
  return Array.isArray(collection) || typeof collection === 'string' || isArguments(collection);
}

/**
 * @param {any} collection iterable or not iterable collection
 * @callback callback
 * @returns 
 */
function each(collection, callback) {
  const isIterable = isIterableCollection(collection);

  if (isIterable) {
    for (const item of collection) {
      callback(item, isIterable)
    }
    return;
  }

  for (const key in collection) {
    callback(key, isIterable)
  }
}

/**
 * @param {any} collection any collection in Js
 * @param {*} callback 
 * @param {*} accumulator 
 * @returns accumulator
 */
function superReduce(collection, callback, accumulator) {
  const haveIndex = isExistIndex(collection);
  let indexOrCollection = haveIndex ? 0 : collection;

  each(collection, (keyOrItem, isIterable) => {
    const callbackArgs = [
      accumulator,
      keyOrItem,
      (isIterable ? indexOrCollection : collection[keyOrItem]),
      collection
    ];

    haveIndex ^ isIterable ? callbackArgs.pop() : indexOrCollection++;
    
    accumulator = callback(...callbackArgs);
  })

  return accumulator;
}

const obj = {
  a: 10,
  b: 20,
  c: 30
}

console.log('By Object:', superReduce(obj, (acc, _, value, obj) => {
  console.log(obj)
  return acc + value
}, 0));

const set = new Set([1, 2, 3, 4, 5, 6, 7, 5, 3, 2]);

console.log('By Set:', superReduce(set, (acc, cur, set) => {
  console.log(set)
  return acc + cur
}, 0))

const map = new Map(Object.entries(obj));

console.log('By Map:', superReduce(map, (acc, [_, value], map) => {
  console.log(map)
  return (acc[value & 1]++, acc)
}, [0, 0]));


const string = 'fahim faisal soikot';

console.log('By String:', superReduce(string, (acc, letter, index, string) => {
  if (/\s/.test(letter)) {
    return acc;
  }
  console.log(string)
  return `${acc}${letter}${index === string.length - 1 ? '' : '-'}`;
}, ''));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('By Array', superReduce(array, (acc, number, index, array) => {
  console.log(array, index)
  return acc + number ** 2;
}, 0))

