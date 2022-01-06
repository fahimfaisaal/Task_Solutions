function getPlanetAgeInYears(planet, seconds) {
    const earthYearInSeconds = 31557600;
    const planetYearInSeconds = earthYearInSeconds * planet.orbit;
    const planetAgeInYears = seconds / planetYearInSeconds;

    return +planetAgeInYears.toFixed(2);
}

const spaceAge = (seconds) => {
    const yearsInAllPlanets = {
        Mercury: 0,
        Venus: 0,
        Earth: 0,
        Mars: 0,
        Jupiter: 0,
        Saturn: 0,
        Uranus: 0,
        Neptune: 0,
    }

    const planets = [
        { name: 'Mercury', orbit: 0.2408467 },
        { name: 'Venus', orbit: 0.61519726 },
        { name: 'Earth', orbit: 1 },
        { name: 'Mars', orbit: 1.8808158 },
        { name: 'Jupiter', orbit: 11.862615 },
        { name: 'Saturn', orbit: 29.447498 },
        { name: 'Uranus', orbit: 84.016846 },
        { name: 'Neptune', orbit: 164.79132 }
    ];

    planets.forEach(planet => {
        yearsInAllPlanets[planet.name] = getPlanetAgeInYears(planet, seconds);
    })

    return yearsInAllPlanets
}

console.log(
    spaceAge(
        Math.round(
            Math.random() * 1e8
        )
    )
)