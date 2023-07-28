const sumAll = function(extreme1, extreme2) {
    let output = 0;
    if (typeof extreme1 != "number" || typeof extreme2 != "number") return "ERROR";
    if (extreme1 < 0 || extreme2 < 0) return "ERROR";
    if (extreme1 < extreme2) {
        while (extreme1 <= extreme2) {
            output += extreme1++;
        }
    } else if (extreme1 > extreme2) {
        while (extreme1 >= extreme2) {
            output += extreme2++;
        }
    }
    
    return output;
};

// Do not edit below this line
module.exports = sumAll;
