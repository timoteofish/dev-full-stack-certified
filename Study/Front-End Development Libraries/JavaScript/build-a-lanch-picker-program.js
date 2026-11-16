console.log('Welcome to the Lunch Picker Program!');
console.log(
  "You can add, remove, and select lunches from the menu, don't worry, you can always add more!",
);
console.log("Let's get started!");

let lunches = [];

function addLunchToEnd(array, lunch) {
  array.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return array;
}
// Adds a lunch to the start of the array and logs the action
function addLunchToStart(array, lunch) {
  array.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  if (array.length === 0) {
    console.log('No lunches to remove.');
  } else {
    const lunch = array.pop();
    console.log(`${lunch} removed from the end of the lunch menu.`);
  }
  return array;
}
// Removes the first lunch from the array and logs the action
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log('No lunches to remove.');
  } else {
    const lunch = array.shift();
    console.log(`${lunch} removed from the start of the lunch menu.`);
  }
  return array;
}
// Selects a random lunch from the array and logs it
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log('No lunches available.');
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[randomIndex]}`);
  }
}
// Displays the current lunch menu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log('The menu is empty.');
  } else {
    console.log(`Menu items: ${array.join(', ')}`);
  }
}
