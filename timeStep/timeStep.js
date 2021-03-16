const arr = ["fahim", "faisal", "shakil", "easin", "turky"];

/**
 * @param {number} start 
 * @param {number} end 
 * @param {function} cb 
 * @param {number} delay in ms
 * @return {undefined}
 */
function infinity(start, end, cb, delay = 1000) {
  for (let i = start; i < end; i++) {
      setTimeout( _=> {
        cb(i);

        i === end - 1 &&
          infinity(start, end, cb, delay);
      }, delay * (!start ? i + 1 : i));
  }
}

infinity(
  0,
  arr.length,
  index => {
    console.log(arr[index]);
  },
  2000
);