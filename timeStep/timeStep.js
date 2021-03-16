const arr = ["fahim", "faisal", "shakil", "easin", "turky"];

function looping(start, end, cb, delay) {
  for (
    let i = start, second = 1000;
    i < end; i++, second += delay
  ) {
    setTimeout( _=> {
      cb(i);
    }, second);
  }
}

/**
 * @param {number} start 
 * @param {number} end 
 * @param {function} cb 
 * @param {number} delay in ms
 * @return {undefined}
 */
function print(start, end, cb, delay = 1000) {
  looping(start, end, cb, delay);

  setInterval( _=> {
    looping(start, end, cb, delay);
  }, end * delay);
}

print(
  0,
  arr.length,
  i => {
    console.log(arr[i]);
  },
  2000
);