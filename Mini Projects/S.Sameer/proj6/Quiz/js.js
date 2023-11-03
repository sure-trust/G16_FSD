const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.addEventListener('click', selectOption);
            optionsElement.appendChild(button);
        });
    } else {
        showResult();
    }
}

function selectOption(event) {
    const selectedOption = event.target.textContent;
    const question = quizData[currentQuestionIndex];
    if (selectedOption === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    nextQuestion();
}

function showResult() {
    questionElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';
}

startGame();

