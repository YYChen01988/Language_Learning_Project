const PubSub = require("../helpers/pub_sub.js");

const FlashcardView = function(container){
  this.container = container;
}

FlashcardView.prototype.bindEvents = function(){
  PubSub.subscribe("Flashcard:selected-language-and-answer", (event) => {
    const flashcards = event.detail;
    console.log(flashcards);
  })
};


module.exports = FlashcardView;
