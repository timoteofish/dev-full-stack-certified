// Build a confirm ending tool
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
// Test the function
console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Congratulation', 'on')); // true
console.log(confirmEnding('Connor', 'n')); // false
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification',
  ),
); // false
console.log(confirmEnding('He has to give me a new name', 'name')); // true
console.log(confirmEnding('Open sesame', 'same')); // true
console.log(confirmEnding('Open sesame', 'pen')); // false
console.log(confirmEnding('Open sesame', '')); // true
console.log(confirmEnding('Open sesame', ' ')); // false
