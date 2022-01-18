function sleep(time: number, unit?: string): void {
    const units = {
        millisecond: time,
        second: 1e3 * time,
        minute: 1e3 * 60 * time,
        hour: 1e3 * 60 * 60 * time,
    }
    const selectedTimeLength: number = units[unit] ? units[unit] : units.second;

    const currentTime: number = new Date().getTime();
    while (currentTime + selectedTimeLength >= new Date().getTime());
}

console.log('Start the execution');
sleep(3);
console.log('End the execution');