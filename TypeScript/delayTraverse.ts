function delayTraverse<T>(array: T[], callback: Function, delay: number | Function = 1) {
    const length: number = array.length;

    for (let i = 0; i < length; i++) {
        setTimeout(() => {
            callback(array[i], i, array);
        }, 1000 * (typeof delay === 'function' ? delay() : delay) * (i + 1))
    }
}