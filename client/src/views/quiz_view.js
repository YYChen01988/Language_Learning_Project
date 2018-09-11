const PubSub = require("../helpers/pub_sub.js");

const QuizView = function(container, question){
  this.questionContainer = container;
  this.question = question;
}

module.exports = QuizView;
