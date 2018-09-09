const PubSub = require("../helpers/pub_sub.js");
const FlashcardView = require("./flashcard_view.js");

const FlashcardListView = function(container) {
  this.container = container;
}

FlashcardListView.prototype.bindEvents = function(){
  PubSub.subscribe("Flashcard:selected-language-and-answer", (event) => {
    this.clearList();
    const flashcards = event.detail;
    // console.log(flashcards[0][1]);
    this.render(flashcards);
  })
};

FlashcardListView.prototype.clearList = function() {
  this.container.innerHTML = '';
}

// Render - call render method in flashcard_view.js 
FlashcardListView.prototype.render = function(flashcards) {
  flashcards.forEach((phrase) => {
    const flashcardView = new FlashcardView(this.container, phrase);
    flashcardView.render();
    // console.log(phrase);
  })
}

module.exports = FlashcardListView;
