const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Quiz = function(url) {
  this.url = url;
  this.request = new Request(this.url);
};

Quiz.prototype.getQuizData = function(){
  this.request.get()
  .then((quiz) => {
    PubSub.publish('Quiz:quiz-data-ready', quiz);
    // console.log(quiz);
    this.publishQuizByLanguage(quiz);
  })
  .catch(console.error);
};

// WE NEED TO RETURN THE LANGUAGE OBJECT(?) THAT MATCHES LANGUAGE SELECTED IN THE DROPDOWN
Quiz.prototype.publishQuizByLanguage = function(quiz){
  this.quiz = quiz;
  console.log(quiz);
  // PubSub.subscribe("SelectView:change", (event) => {
  //   });
  //   PubSub.publish("Quiz:selected-data-ready", selectedLanguageQuiz);
  // });
};

module.exports = Quiz;
