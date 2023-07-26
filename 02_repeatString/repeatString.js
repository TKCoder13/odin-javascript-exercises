const repeatString = function(stringIn, numOfTimes) {
    if (numOfTimes < 0) {
        return "ERROR";
    }
    let output = "";
    for (let i = 0; i < numOfTimes; i++) {
        output = output + stringIn;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
