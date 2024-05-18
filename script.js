// Get references to the necessary elements
const quizContainer = document.getElementById('quizContainer');
const questionNumber = document.getElementById('questionNumber');
const question = document.getElementById('question');
const progressBar = document.getElementById('progressBar');
const answers = document.querySelectorAll('.answer .btn');
const submitAnswer = document.getElementById('submitAnswer');

// Define an array of questions and answers
const questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 0
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctAnswer: 1
    },
    {
      question: 'What is the square root of 64?',
      answers: ['4', '6', '8', '10'],
      correctAnswer: 2
    },
    {
      question: 'Which of the following is a programming language?',
      answers: ['HTML', 'CSS', 'JavaScript', 'All of the above'],
      correctAnswer: 2
    },
    {
      question: 'What is the smallest continent by land area?',
      answers: ['Europe', 'Africa', 'Australia', 'Antarctica'],
      correctAnswer: 3
    },
    {
      question: 'Which of the following is a prime number?',
      answers: ['6', '7', '10', '12'],
      correctAnswer: 1
    },
    {
      question: 'What is the largest ocean on Earth?',
      answers: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
      correctAnswer: 2
    },
    {
      question: 'Which of the following is a famous Renaissance artist?',
      answers: ['Michelangelo', 'Leonardo da Vinci', 'Vincent van Gogh', 'Both A and B'],
      correctAnswer: 3
    },
    {
      question: 'What is the symbol for the chemical element gold?',
      answers: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 0
    }
  ];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  question.textContent = currentQuestion.question;

  // Clear previous answer selections
  answers.forEach(answer => answer.classList.remove('selected'));

  // Display the answers
  currentQuestion.answers.forEach((answer, index) => {
    answers[index].textContent = answer;
  });
}

// Event listener for answer selection
answers.forEach(answer => {
  answer.addEventListener('click', () => {
    // Remove previous answer selections
    answers.forEach(answer => answer.classList.remove('selected'));

    // Mark the selected answer
    answer.classList.add('selected');
  });
});

// Event listener for submit answer button
submitAnswer.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('.answer .btn.selected');

  if (selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswer;

    // Check if the selected answer is correct
    if (Array.from(answers).indexOf(selectedAnswer) === correctAnswerIndex) {
      // Correct answer logic
      console.log('Correct answer!');
    } else {
      // Incorrect answer logic
      console.log('Incorrect answer!');
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      // Quiz finished logic
      console.log('Quiz finished!');
    }
  } else {
    // No answer selected logic
    console.log('Please select an answer.');
  }
});

// Display the first question
displayQuestion();