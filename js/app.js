


const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: "Pacific"
    },
    {
        question: "Which Country is called giant of Africa?",
        options: ["Nigeria", "Sudan", "Ethopia", "Ghana"],
        correct: "Nigeria"
    },
    {
        question: "Who is the current Chairman of ECOWAS?",
        options: ["Bola Tinubu", "Emilokan", "John Snow", "Atiku Abubakar"],
        correct: "Bola Tinubu"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Uranus", "Jupitar", "Pluto", "Earth"],
        correct: "Jupitar"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option));
        li.appendChild(button);
        optionsElement.appendChild(li);
    });
    nextButton.disabled = true;
    resultElement.textContent = "";
}

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = `Incorrect! The correct answer is ${currentQuestion.correct}.`;
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = `Quiz Completed! Your score is ${score} out of ${quizData.length}💐.`;
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    resultElement.textContent = "";
}

nextButton.addEventListener("click", nextQuestion);

// Load the first question
loadQuestion();
