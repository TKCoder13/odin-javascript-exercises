const fibonacci = function(n) {
    let n_0 = 0;
    let n_1 = 1;
    let n_2 = 1;
    if (n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return n_0;
    } else if (n == 1) {
        return n_1;
    } else if (n == 2) {
        return n_2;
    } else if (n > 2) {
        return fibonacci(n-1) + fibonacci(n-2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
