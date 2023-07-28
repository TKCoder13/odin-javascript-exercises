const palindromes = function (stringInput) {
    let realInput = "";

    stringInput = stringInput.toLowerCase();
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput.charAt(i).match(/[a-z]/i) || containsNumbers(stringInput.charAt(i))) {
            realInput += stringInput.charAt(i);
        }
    }

    reverseInput = reverseString(realInput);
    console.log(realInput);
    console.log(reverseInput);
    for (let i = 0; i < realInput.length; i++) {
        if (!(realInput.charAt(i) == reverseInput.charAt(i))) return false;
    }
    return true;
};

const reverseString = function(input) {
    output = "";
    for (let i = 0; i < input.length; i++) {
        output += input.charAt(input.length-i-1);
    }
    return output;
};

function containsNumbers(str) {
    return /\d/.test(str); // \d represents [0-9], aka digits
}

// Do not edit below this line
module.exports = palindromes;
