const startButton1 = document.getElementById('start-btn1')
const startButton2 = document.getElementById('start-btn2')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton1.addEventListener('click', startGame1)
startButton2.addEventListener('click', startGame2)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame1() {
  startButton1.classList.add('hide')
  startButton2.classList.add('hide')
  shuffledQuestions = questions1.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function startGame2() {
    startButton2.classList.add('hide')
    startButton1.classList.add('hide')
    shuffledQuestions = questions2.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions1 = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<script>', correct: true },
      { text: '<javascript>', correct: false }
    ]
  },
  {
    question: 'Who is the best educator?',
    answers: [
      { text: 'Alper', correct: true },
      { text: 'Lisa', correct: true },
      { text: 'Conner', correct: true },
      { text: 'Julie', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'The external JavaScript file must contain the <script> tag.',
    answers: [
      { text: 'True', correct: false },
      { text: 'False', correct: true }
    ]
  }
]

const questions2 = [
    {
      question: 'JavaScript is the same as Java.',
      answers: [
        { text: 'False', correct: true },
        { text: 'True', correct: false }
      ]
    },
    {
      question: 'Which event occurs when the user clicks on an HTML Element?',
      answers: [
        { text: 'onmouseover', correct: false },
        { text: 'onmouseclick', correct: false },
        { text: 'onchange', correct: false },
        { text: 'onclick', correct: true }
      ]
    },
    {
      question: 'Which operator is used to assign a value to a variable?',
      answers: [
        { text: '*', correct: false },
        { text: '=', correct: true },
        { text: '-', correct: false },
        { text: 'X', correct: false }
      ]
    },
    {
      question: 'JavaScript is Case-sensitive.',
      answers: [
        { text: 'False', correct: false },
        { text: 'True', correct: true }
      ]
    }
  ]