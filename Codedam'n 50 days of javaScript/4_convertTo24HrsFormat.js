const time = '5:00AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    let [hour, minute] = time.substring(0, time.length - 2).split(':');
    const amOrPm = time.substring(time.length - 2);

    if (
        (amOrPm === 'PM' && hour < '12') ||
        (amOrPm === 'AM' && hour === '12')
    ) {
        hour = +hour + 12;
    }

    hour = hour.length < 2 ? `0${hour}` : hour;
    minute = minute.length < 2 ? `0${minute}` : minute;

    return `${hour === 24 ? '00' : hour}:${minute}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)