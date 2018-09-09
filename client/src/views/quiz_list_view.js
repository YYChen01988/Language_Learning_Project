const PubSub = require("../helpers/pub_sub.js");
// const QuizView = require("./quiz_view.js");

const QuizListView = function(container) {
  this.container = container;
}

QuizListView.prototype.bindEvents = function(){
  PubSub.subscribe("Quiz:selected-data-ready", (event) => {
    this.clearList();
    const questions = event.detail;
    // console.log()
    this.render(questions);
  })
};

QuizListView.prototype.clearList = function() {
  this.container.innerHTML = '';
}

QuizListView.prototype.render = function(questions) {
  questions.forEach((question) => {
    const quizView = new QuizView(this.container, question);
    quizView.render();
    // console.log();
  })
}

module.exports = QuizListView;
