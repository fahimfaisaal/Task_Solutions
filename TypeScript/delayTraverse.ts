function delayTraverse<T>(array: T[], callback: Function, delay: number = 1) {
    const length: number = array.length;

    for (let i = 0; i < length; i++) {
        setTimeout(() => {
            callback(array[i], i, array);
        }, 1000 * delay * (i + 1))
    }
}