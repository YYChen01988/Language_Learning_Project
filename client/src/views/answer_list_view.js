const PubSub = require("../helpers/pub_sub.js");
const QuizView = require("./quiz_view.js");

const AnswerListView = function(container) {
  this.container = container;
}

AnswerListView.prototype.bindEvents = function(){
  PubSub.subscribe("Quiz:correct-answer", (event) => {
    this.clearList();
    if (event.detail === true){
      const correct = new QuizView(this.container, event.detail);
      correct.renderCorrect();
    } else {
        const wrong = new QuizView(this.container, event.detail);
        wrong.renderFalse();
    }
  });
}

AnswerListView.prototype.clearList = function() {
  this.container.innerHTML = '';
}

module.exports = AnswerListView;
