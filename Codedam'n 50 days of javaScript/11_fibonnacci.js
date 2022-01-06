function fibonacci(n) {
    // write your solution here
    const fibonacci = [1, 1]

    for (let i = 2; i < n; i++) {
        fibonacci[2] = fibonacci[1] + fibonacci[0];
        fibonacci.shift()
    }

    return n < 3 ? fibonacci[n - 1] : fibonacci[1]
}

console.log(`fibonacci value at position 5: ${fibonacci(7)}`)
