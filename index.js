function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName() {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
    return names[getRandomInt(0, names.length - 1)];
}

function getRandomAddress() {
    const streets = ['Main St', 'Second St', 'Third St'];
    const cities = ['New York', 'Los Angeles', 'Chicago'];
    return `${getRandomInt(1, 100)} ${streets[getRandomInt(0, streets.length - 1)]}, ${cities[getRandomInt(0, cities.length - 1)]}`;
}

module.exports = { getRandomInt, getRandomName, getRandomAddress };
