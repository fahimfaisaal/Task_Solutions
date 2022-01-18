enum TimeUnit {
    ms = 'millisecond',
    sec = 'second',
    min = 'minute',
    hr = 'hour'
}

function sleep(time: number, unit: TimeUnit = TimeUnit.sec): void {
    const units = {
        millisecond: time,
        second: 1e3 * time,
        minute: 1e3 * 60 * time,
        hour: 1e3 * 60 * 60 * time,
    }
    const selectedTimeLength: number = units[unit];

    const currentTime: number = new Date().getTime();
    while (currentTime + selectedTimeLength >= new Date().getTime());
}

console.log('Start the execution');
sleep(10);
console.log('End the execution');