// This function converts a temperature from Celsius to Fahrenheit
function convertCtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}
// Test cases
console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(20));
console.log(convertCtoF(86));
