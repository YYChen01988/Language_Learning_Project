const PubSub = require("../helpers/pub_sub.js");

const FlashcardView = function(container){
  this.container = container;
}

FlashcardView.prototype.bindEvents = function(){
  PubSub.subscribe("Flashcard:selected-language-and-answer", (event) => {
    const flashcards = event.detail;
    // this.container.innerHTML = "";

    // this.render(flashcards);
    console.log(flashcards); // -> is array of foreign word + translation
  })
};

// FlashcardView.prototype.render = function(languageList){
//
//   const flashcardContainer = document.createElement('div');
//   flashcardContainer.id = 'flashcard-words';
//
//   const foreignWord = this.createForeignWord("Phrase", languageList.foreignWord);
//   flashcardContainer.appendChild(foreignWord);
//
//
//   this.container.appendChild(flashcardContainer)
//   // console.log(languageList);
// };


module.exports = FlashcardView;
