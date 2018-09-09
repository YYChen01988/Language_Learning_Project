const PubSub = require("../helpers/pub_sub.js");
const FlashcardView = require("./flashcard_view.js");

const FlashcardListView = function(container) {
  this.container = container;
  this.flashcards = null;
  this.currentFlashcardNumber = 0;
}

FlashcardListView.prototype.bindEvents = function(){
  const nextButton = document.querySelector('#nextButton');
  nextButton.addEventListener('click', (event) => {
    this.currentFlashcardNumber++;
    if(this.currentFlashcardNumber >= this.flashcards.length){
      this.currentFlashcardNumber = 0;
    }
    this.clearList();
    this.render(this.flashcards[this.currentFlashcardNumber]);
  })


  const prevButton = document.querySelector('#prevButton');
  prevButton.addEventListener('click', (event) => {
    this.currentFlashcardNumber--;
    if(this.currentFlashcardNumber < 0){
      this.currentFlashcardNumber = this.flashcards.length-1;
    }
    this.clearList();
    this.render(this.flashcards[this.currentFlashcardNumber]);
  })

  PubSub.subscribe("Flashcard:selected-language-and-answer", (event) => {
    this.clearList();
    this.flashcards = event.detail;
    // console.log(flashcards[0][1]);
    this.render(this.flashcards[this.currentFlashcardNumber]);
  })
};

FlashcardListView.prototype.clearList = function() {
  this.container.innerHTML = '';
}

// Render - call render method in flashcard_view.js
FlashcardListView.prototype.render = function(flashcard) {

    const flashcardView = new FlashcardView(this.container, flashcard);
    flashcardView.render();
    // console.log(this.container);
}

module.exports = FlashcardListView;
