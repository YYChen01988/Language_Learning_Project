const PubSub = require("../helpers/pub_sub.js");
const Quiz = require("../models/quiz.js")

const QuizView = function(container, question){
  this.questionsContainer = container;
  this.question = question;
}

QuizView.prototype.render = function (flashcard) {
  const questionContainer = document.createElement('div');

  const foreign = this.createForeignPhrase();
  questionContainer.appendChild(foreign);

  const textBox = document.createElement('input');
  questionContainer.appendChild(textBox);

  const checkAnswerButton = document.createElement('button');
  checkAnswerButton.classList.add('checkButton');
  buttonTitle = document.createTextNode("Check answer");
  checkAnswerButton.appendChild(buttonTitle);
  questionContainer.appendChild(checkAnswerButton);
  checkAnswerButton.addEventListener('click', (event) => {
    const quiz = new Quiz();
    quiz.checkAnswer(textBox.value, this.question[0]);
  })
  this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.createForeignPhrase = function() {
  const foreign = document.createElement('p');
  foreign.textContent = this.question[1];
  return foreign;
};

QuizView.prototype.renderCorrect = function () {

  const questionContainer = document.createElement('div');
  const text = document.createElement('h2');
  // text.textContent = "Correct!";
  text.innerHTML = '<font color="green">Correct!</font>';
  questionContainer.appendChild(text);
  this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.renderFalse = function () {

  const questionContainer = document.createElement('div');
  const text = document.createElement('h2');
  // text.textContent = "Try again";
  text.innerHTML = '<font color="red">Try again</font>';
  questionContainer.appendChild(text);
  this.questionsContainer.appendChild(questionContainer);
};

module.exports = QuizView;

// QuizView.prototype.bindEvents = function(){
//   PubSub.subscribe("Quiz:correct-answer", (event) => {
//     if (event.detail === true){
//     var popup = open("", "Popup", "width=300,height=200");
//     var rightResponse = popup.document.createElement("h1");
//     rightResponse.textContent = "You are correct!!"
//     popup.document.body.appendChild(rightResponse);
//   }else{
//     var popup = open("", "Popup", "width=300,height=200");
//     var wrongResponse = popup.document.createElement("h1");
//     wrongResponse.textContent = "Try Again!"
//     popup.document.body.appendChild(wrongResponse);
//   }
//   });
// };
