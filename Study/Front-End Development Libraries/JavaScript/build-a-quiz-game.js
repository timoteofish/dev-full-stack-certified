const questions = [
  {
    category: 'Science',
    question: 'What planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Jupiter'],
    answer: 'Mars',
  },
  {
    category: 'Geography',
    question: 'What is the capital of France?',
    choices: ['London', 'Berlin', 'Paris'],
    answer: 'Paris',
  },
  {
    category: 'History',
    question: 'Who was the first President of the United States?',
    choices: ['Abraham Lincoln', 'George Washington', 'John Adams'],
    answer: 'George Washington',
  },
  {
    category: 'Technology',
    question: 'What does HTML stand for?',
    choices: [
      'HyperText Markup Language',
      'HighText Machine Language',
      'HyperTool Markup Language',
    ],
    answer: 'HyperText Markup Language',
  },
  {
    category: 'Mathematics',
    question: 'What is the square root of 64?',
    choices: ['6', '7', '8'],
    answer: '8',
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

console.log(getRandomQuestion(questions));
console.log(getRandomComputerChoice(questions[0].choices));
console.log(getResults(questions[0], getRandomComputerChoice(questions[0].choices)));
