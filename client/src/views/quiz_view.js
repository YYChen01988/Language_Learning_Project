const PubSub = require("../helpers/pub_sub.js");
const Quiz = require("../models/quiz.js")

const QuizView = function(container, question){
  this.questionsContainer = container;
  this.question = question;
}

QuizView.prototype.render = function (flashcard) {
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('flashcard');

  const foreign = this.createForeignPhrase();
  questionContainer.appendChild(foreign);

  const textBox = document.createElement('input');
  questionContainer.appendChild(textBox);

  const checkAnswerButton = document.createElement('button');
  buttonTitle = document.createTextNode("Check answer");
  checkAnswerButton.appendChild(buttonTitle);
  questionContainer.appendChild(checkAnswerButton);
  checkAnswerButton.addEventListener('click', (event) => {
    const quiz = new Quiz();
    // need to take data from text box which is check answer parameter
    quiz.checkAnswer(textBox.value, this.question[0]);
    // console.log(foreign.value);
  })

  this.questionsContainer.appendChild(questionContainer);
};

QuizView.prototype.createForeignPhrase = function() {
  const foreign = document.createElement('h2');
  foreign.textContent = this.question[1];
  return foreign;
};

QuizView.prototype.bindEvents = function(){
  PubSub.subscribe("Quiz:correct-answer", (event) => {
    if (event.detail === true){
    var popup = open("", "Popup", "width=300,height=200");
    var rightResponse = popup.document.createElement("h1");
    rightResponse.textContent = "You are correct!!"
    popup.document.body.appendChild(rightResponse);
  }else{
    var popup = open("", "Popup", "width=300,height=200");
    var wrongResponse = popup.document.createElement("h1");
    wrongResponse.textContent = "Try Again!"
    popup.document.body.appendChild(wrongResponse);
  }

  });
};




module.exports = QuizView;
