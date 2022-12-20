// Code your solution here
function findMatching(driversArray, stringToMatch) {
    const matchingDrivers = [];
     driversArray.filter(function (driver) {
        if (driver === stringToMatch || driver === stringToMatch.toLowerCase()) {
            matchingDrivers.push(driver);
        }
    })
    return matchingDrivers;
}

function fuzzyMatch(driversArray, stringOfLetters) {
    const fuzzyMatchingDrivers = [];
    driversArray.filter(function (driver) {
        if (driver[0] === stringOfLetters[0] && driver[1] === stringOfLetters[1]) {
            fuzzyMatchingDrivers.push(driver);
        }
    })
    return fuzzyMatchingDrivers;
}

function matchName(driversObjects, nameStringToMatch) {
    const matchingDrivers = [];
    driversObjects.filter(function(driver) {
        if (driver.name === nameStringToMatch) {
            matchingDrivers.push(driver);
        }
    })
    return matchingDrivers;
}   