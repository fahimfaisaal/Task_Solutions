function shake<T>(array: T[], numberOfShake: number = array.length): T[] {
    const arrayLength: number = array.length;
    
    function random(length: number): number {
        return Math.floor(Math.random() * length);
    }

    while (numberOfShake--) {
        const random1 = random(arrayLength);
        const random2 = random(arrayLength);

        if (random1 === random2) {
            return shake(array, numberOfShake + 1);
        }

        [array[random1], array[random2]] = [array[random2], array[random1]];
    }

    return array;
}

console.log(shake<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))