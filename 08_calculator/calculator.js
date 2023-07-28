const add = function(...inputs) {
  let output = 0;
	inputs.forEach(function (item) {
    output += item;
  });
  return output;
};

const subtract = function(...inputs) {
	let output = inputs[0] - inputs[1];
  return output;
};

const sum = function(arrayOfInputs) {
	let output = 0;
	for (let i = 0; i < arrayOfInputs.length; i++) {
    output += arrayOfInputs[i];
  }
  return parseInt(output);
};

const multiply = function(arrayOfInputs) {
  let output = arrayOfInputs[0];
	for (let i = 1; i < arrayOfInputs.length; i++) {
    output *= arrayOfInputs[i];
  }
  return parseInt(output);
};

const power = function(base, power) {
	let output = base;
  for (let i = 0; i < power - 1; i++) {
    output *= base;
  }
  return output;
};

const factorial = function(n) {
	let output = 1;
  for (let i = 1; i <= n; i++) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
