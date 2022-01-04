function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    // write your solution here
    return Math.floor(
        (Math.random() * rangeStart) + (rangeEnd - rangeStart)
    )
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);