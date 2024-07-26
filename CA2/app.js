const questions = [
  {
    question: "When was Singapore Polytechnic officially established?",
    answers: [
      { text: "1951", correct: false },
      { text: "1954", correct: true },
      { text: "1958", correct: false },
      { text: "1961", correct: false },
    ],
  },
  {
    question:
      "Who petitioned the government for the establishment of Singapore Polytechnic?",
    answers: [
      { text: "Mr Thio Chan Bee", correct: true },
      { text: "Dr Toh Chin Chye", correct: false },
      { text: "Mr V P W Ager", correct: false },
      { text: "Mr Low Wong Fook", correct: false },
    ],
  },
  {
    question:
      "In which year did Prince Philip officially open Singapore Polytechnic?",
    answers: [
      { text: "1956", correct: false },
      { text: "1958", correct: true },
      { text: "1960", correct: false },
      { text: "1962", correct: false },
    ],
  },
  {
    question:
      "Where was the first Graduation Ceremony of Singapore Polytechnic held?",
    answers: [
      { text: "Victoria Theatre", correct: true },
      { text: "Marina Bay Sands", correct: false },
      { text: "Esplanade - Theatres on the Bay", correct: false },
      { text: "Sentosa Island", correct: false },
    ],
  },
  {
    question:
      "Which campus site was chosen as the permanent home of Singapore Polytechnic?",
    answers: [
      { text: "Ayer Rajah Road", correct: false },
      { text: "Dover Road", correct: true },
      { text: "Princess Mary Barracks", correct: false },
      { text: "Marina Bay", correct: false },
    ],
  },
  {
    question:
      "Who officially opened the Dover Road campus of Singapore Polytechnic?",
    answers: [
      { text: "Lee Kuan Yew", correct: true },
      { text: "Toh Chin Chye", correct: false },
      { text: "George Fong Wah", correct: false },
      { text: "Wee Kim Wee", correct: false },
    ],
  },
  {
    question:
      "In which decade did Singapore Polytechnic introduce the Dual Training Scheme?",
    answers: [
      { text: "1950s", correct: false },
      { text: "1960s", correct: false },
      { text: "1970s", correct: false },
      { text: "1990s", correct: true },
    ],
  },
  {
    question:
      "Which diploma program was first introduced by Singapore Polytechnic in 1994?",
    answers: [
      { text: "Diploma in Engineering", correct: false },
      { text: "Diploma in Optometry", correct: true },
      { text: "Diploma in Business", correct: false },
      { text: "Diploma in IT", correct: false },
    ],
  },
  {
    question:
      "When did Singapore Polytechnic achieve membership in the Singapore Quality Class?",
    answers: [
      { text: "1979", correct: false },
      { text: "1989", correct: false },
      { text: "1999", correct: true },
      { text: "2009", correct: false },
    ],
  },
  {
    question:
      "Which year did Singapore Polytechnic receive ISO 9000 and ISO 14000 certifications?",
    answers: [
      { text: "1990", correct: false },
      { text: "2000", correct: true },
      { text: "2010", correct: false },
      { text: "2020", correct: false },
    ],
  },
  {
    question:
      "Who created the world’s first titanium-gold and five-coloured multi-layered gold at Singapore Polytechnic?",
    answers: [
      { text: "George Fong Wah", correct: false },
      { text: "Lee Hsien Loong", correct: false },
      { text: "Loh Peng Chum", correct: true },
      { text: "Soh Wai Wah", correct: false },
    ],
  },
  {
    question:
      "Which Singapore President visited Singapore Polytechnic in 1986?",
    answers: [
      { text: "S R Nathan", correct: true },
      { text: "Tony Tan", correct: false },
      { text: "Wee Kim Wee", correct: false },
      { text: "Halimah Yacob", correct: false },
    ],
  },
  {
    question:
      "In which year did Singapore Polytechnic celebrate its 50th anniversary?",
    answers: [
      { text: "1984", correct: false },
      { text: "1994", correct: false },
      { text: "2004", correct: true },
      { text: "2014", correct: false },
    ],
  },
  {
    question:
      "Who took over as Principal and CEO of Singapore Polytechnic in October 2016?",
    answers: [
      { text: "Soh Wai Wah", correct: true },
      { text: "Khoo Kay Chai", correct: false },
      { text: "Low Wong Fook", correct: false },
      { text: "V P W Ager", correct: false },
    ],
  },
  {
    question:
      "Which prestigious award was Singapore Polytechnic awarded in 2006 for its environmental report?",
    answers: [
      { text: "Nobel Prize", correct: false },
      { text: "Pulitzer Prize", correct: false },
      { text: "Best Environmental Report by ACCA", correct: true },
      { text: "Best Educational Institution Award", correct: false },
    ],
  },
  {
    question: "Who was appointed Chairman of the Board of Governors in 1986?",
    answers: [
      { text: "Khoo Kay Chai", correct: false },
      { text: "George Fong Wah", correct: true },
      { text: "Tony Tan", correct: false },
      { text: "Soh Wai Wah", correct: false },
    ],
  },
  {
    question:
      "In which decade did Singapore Polytechnic introduce the Singapore Polytechnic Entrepreneurs' Club?",
    answers: [
      { text: "1960s", correct: false },
      { text: "1970s", correct: false },
      { text: "1980s", correct: false },
      { text: "1990s", correct: true },
    ],
  },
  {
    question:
      "When did Singapore Polytechnic achieve its 200,000th graduate milestone?",
    answers: [
      { text: "2005", correct: false },
      { text: "2010", correct: false },
      { text: "2015", correct: false },
      { text: "2018", correct: true },
    ],
  },
  {
    question:
      "Which year did the Industrial Training Programme at Singapore Polytechnic celebrate its 30th anniversary?",
    answers: [
      { text: "1980", correct: false },
      { text: "1990", correct: true },
      { text: "2000", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question:
      "Who laid the foundation stone for the new Dover Road campus of Singapore Polytechnic in 1975?",
    answers: [
      { text: "Lee Kuan Yew", correct: false },
      { text: "Toh Chin Chye", correct: true },
      { text: "George Fong Wah", correct: false },
      { text: "Khoo Kay Chai", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  if(score <= 10){
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`+ " Could be better 😔. Try again!";} 
  else if (score > 10) {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`+ " Well done! You passed! 👏";
  }
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
