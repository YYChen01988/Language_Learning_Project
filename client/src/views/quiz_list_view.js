const PubSub = require("../helpers/pub_sub.js");
const QuizView = require("./quiz_view.js");


const QuizListView = function(container, answerListView) {
  this.container = container;
  this.quizQuestionPairs = null;
  this.currentQuizIndex = 0;
  this.answerListView = answerListView;
}

QuizListView.prototype.bindEvents = function(){

  const nextQuizButton = document.querySelector('#nextQuiz');
  nextQuizButton.addEventListener('click', (event) => {
    this.currentQuizIndex = Math.floor(Math.random()*this.quizQuestionPairs.length);
    // console.log(this.currentQuizIndex);
    this.clearList();
    this.answerListView.clearList();
    this.render(this.quizQuestionPairs[this.currentQuizIndex]);
  })

  PubSub.subscribe("Quiz:selected-data-ready", (event) => {
    this.clearList();
    this.quizQuestionPairs = event.detail;
    this.render(this.quizQuestionPairs[this.currentQuizIndex]);
  });
};

QuizListView.prototype.clearList = function() {
  this.container.innerHTML = '';
}


QuizListView.prototype.render = function(quizQuestionPair) {
    const quizView = new QuizView(this.container, quizQuestionPair);
    quizView.render();
}

module.exports = QuizListView;
