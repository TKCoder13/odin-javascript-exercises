const reverseString = function(input) {
    output = "";
    for (let i = 0; i < input.length; i++) {
        output += input.charAt(input.length-i-1);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
