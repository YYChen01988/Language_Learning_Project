const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function(url) {
  this.url = url;
  this.request = new Request(this.url);
};

Quiz.prototype.getQuizData = function(){
  this.request.get()
  .then((quiz) => {
    this.publishQuizByLanguage(quiz);
  })
  .catch(console.error);
};

Quiz.prototype.publishQuizByLanguage = function(quiz){
  this.quiz = quiz;
  PubSub.subscribe("SelectView:change", (event) => {
    const selectedQuizWords = [];
    this.quiz.forEach((question) => {
      selectedQuizWords.push([question.English, question[event.detail]])
      })
      PubSub.publish("Quiz:selected-data-ready", selectedQuizWords);
    });
  };

// write checkAnswer method here --> use this but move it?
Quiz.prototype.checkAnswer = function(textBoxValue, english){
  if (textBoxValue === english){
    var answer = true;
  } else {
    var answer = false;
  };
  PubSub.publish("Quiz:correct-answer", answer);
};

module.exports = Quiz;
