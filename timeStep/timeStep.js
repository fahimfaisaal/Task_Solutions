const arr = ["fahim", "faisal", "shakil", "easin", "turky"];

function looping(start, end, cb, step) {
  for (
    let i = start, second = 1000;
    i < end; i++, second += step
  ) {
    setTimeout(() => {
      cb(i);
    }, second);
  }
}

function print(start, end, cb, step = 1000) {
  looping(start, end, cb, step);

  setInterval(() => {
    looping(start, end, cb, step);
  }, end * step);
}

print(
  0,
  arr.length,
  i => {
    console.log(arr[i]);
  },
  2000
);
