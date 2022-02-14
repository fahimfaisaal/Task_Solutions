function deepReverse(array) {
  return array.reduceRight((reversedArr, curValue) => {
    Array.isArray(curValue)
      ? reversedArr.push(deepReverse(curValue))
      : reversedArr.push(curValue);

    return reversedArr;
  }, [])
}

module.exports = deepReverse;