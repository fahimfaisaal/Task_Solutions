const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const daysInMonths = (month) => {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let totalDays = 0;

    for (let i = 0; i < month; i++) {
        totalDays += days[i]
    }

    return totalDays;
};

function getDaysBetweenDates(dateText1, dateText2) {
    // write your solution here
    const [month1, day1] = dateText1.split('/');
    const [month2, day2] = dateText2.split('/');

    return Math.abs(
        (daysInMonths(+month1) + +day1) * DAY_IN_MILLISECONDS -
        (daysInMonths(+month2) + +day2) * DAY_IN_MILLISECONDS
    ) / 1000 / 60 / 60 / 24
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`)
