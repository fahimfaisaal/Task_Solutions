const pipe = require('./pipe');

const functionList1 = [
  String,
  Math.pow, [sub,
    [
      Math.floor,
      div
    ]
  ],
];

const functionList2 = [[addTen, subtractTwo], [sum, sub], div, Math.floor, String];

console.log(pipe(functionList1, 2, 3));
console.log(pipe(functionList2, 10));

function addTen(n) {
  return n + 10;
}

function subtractTwo(n) {
  return n - 2;
}

function multiplyFive(n) {
  return n * 5;
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}