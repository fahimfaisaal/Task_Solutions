console.clear()

for (let i = 1; i <= 8; i++) {
    !(i % 2) && process.stdout.write(' ');

    for (let j = 1; j <= 8; j++)
        process.stdout.write('# ')

    process.stdout.write('\n')
}