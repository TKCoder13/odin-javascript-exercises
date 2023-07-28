const removeFromArray = function(array, argToRemove) {
    let output = [];
    let outputIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != argToRemove) {
            output[outputIndex++] = array[i];
        }
    }
    console.log(output);
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
