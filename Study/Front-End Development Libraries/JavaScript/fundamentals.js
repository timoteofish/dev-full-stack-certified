// Build a String Inverter
function reverseString(str) {
  return str.split("").reverse().join("");
}
// Build the Largest Number Finder
function largestOfAll(arr) {
  return arr.map(subArr => Math.max(...subArr));
}
// Build a First Element Finder
function findElement(arr, func) {
  return arr.find(func);
}
// Implement the Slice and Splice Algorithm
function frankenSplice(arr1, arr2, n) {
  const result = [...arr2];
  result.splice(n, 0, ...arr1);
  return result;
}
// Build a Pyramid Generator
function pyramid(char, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    const spaces = inverted ? i : rows - i - 1;
    const chars = inverted ? 2 * (rows - i) - 1 : 2 * i + 1;

    result += " ".repeat(spaces) + char.repeat(chars) + "\n";
  }

  return result;
}
// Build a Gradebook Application
function getAverage(scores) {
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const status = hasPassingGrade(studentScore)
    ? "You passed the course."
    : "You failed the course.";

  return `Class average: ${average}. Your grade: ${grade}. ${status}`;
}