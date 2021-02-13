console.clear()

for (let i = 1; i <= 100; i++) {
    !(i % 3) && process.stdout.write('Fizz')
    !(i % 5) && process.stdout.write('Buzz')

    if (i % 5 === 0 || i % 3 === 0)
        process.stdout.write('\n');
}
