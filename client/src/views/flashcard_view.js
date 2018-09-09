const PubSub = require("../helpers/pub_sub.js");

const FlashcardView = function(container, phrase){
  this.phrasesContainer = container;
  this.phrase = phrase;
}

// THIS IS WHERE THE FLASHCARD IS RENDERED

FlashcardView.prototype.render = function (flashcard) {
  const phraseContainer = document.createElement('div');
  phraseContainer.classList.add('flashcard');

  const foreign = this.createForeignPhrase();
  phraseContainer.appendChild(foreign);

  const english = this.createEnglishPhrase();
  phraseContainer.appendChild(english);

  this.phrasesContainer.appendChild(phraseContainer);
};

FlashcardView.prototype.createForeignPhrase = function() {
  const foreign = document.createElement('h2');
  foreign.textContent = this.phrase[0];
  return foreign;
}

FlashcardView.prototype.createEnglishPhrase = function() {
  const english = document.createElement('p');
  english.textContent = this.phrase[1];
  return english;
}

module.exports = FlashcardView;
