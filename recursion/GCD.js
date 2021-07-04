console.clear();

function GCD(a, b) {
  if (b === 0) {
    return a;
  }
  
  console.log(`${a} % ${b} = ${a % b}`);
  
  return GCD(b, a % b);
}

const a = 1680;
const b = 640;

const gcd = GCD(a, b);

console.log("GCD = " + gcd);
console.log("LCM = " + (a * b) / gcd);