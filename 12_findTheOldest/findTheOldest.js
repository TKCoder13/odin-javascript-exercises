const findTheOldest = function(people) {
    let oldestName = "";
    let oldestAge = 0;
    let oldestPerson = [];
    for (let i = 0; i < people.length; i++) {
        let currentName = people[i].name;
        let currentAge = 0;
        if (!people[i].yearOfDeath) {
            currentDate = new Date().getFullYear();
            currentAge = currentDate - people[i].yearOfBirth;
        } else {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        
        let currentPerson = people[i];
        if (i == 0) {
            oldestName = currentName;
            oldestAge = currentAge;
            oldestPerson = currentPerson;
        } else if (oldestAge < currentAge) {
            oldestAge = currentAge;
            oldestName = currentName;
            oldestPerson = currentPerson;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
