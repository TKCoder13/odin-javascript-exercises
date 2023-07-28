const removeFromArray = function(inputArray, ...argsToRemove) {
    return inputArray.filter(correctInput => !argsToRemove.includes(correctInput));
};



// Do not edit below this line
module.exports = removeFromArray;
