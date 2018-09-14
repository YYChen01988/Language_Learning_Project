const PubSub = require("../helpers/pub_sub.js");

const FlashcardView = function(container, phrase){
  this.phrasesContainer = container;
  this.phrase = phrase;
}

FlashcardView.prototype.render = function (flashcard) {
  const phraseContainer = document.createElement('div');
  phraseContainer.classList.add('flashcard');

  const foreign = this.createForeignPhrase();
  phraseContainer.appendChild(foreign);

  const english = this.createEnglishPhrase();
  phraseContainer.appendChild(english);

  const buttonContainer = document.createElement('div');
  const audioButton = document.createElement('button');
  audioButton.classList.add('audiobutton')
  audioButton.innerHTML = '<img src="images/play.png" width="206px" height="50px"/>';

  const audio = this.createAudioElement();
  audioButton.appendChild(audio);
  phraseContainer.appendChild(audioButton);
  audioButton.addEventListener('click', (event) => {
  audio.play(event);})

  this.phrasesContainer.appendChild(phraseContainer);
};

FlashcardView.prototype.createForeignPhrase = function() {
  const foreign = document.createElement('h2');
  foreign.textContent = this.phrase[0];
  return foreign;
}

FlashcardView.prototype.createEnglishPhrase = function() {
  const english = document.createElement('h3');
  english.textContent = this.phrase[1];
  return english;
}

FlashcardView.prototype.createAudioElement = function() {
  const audio = document.createElement('audio');
  audio.src = this.phrase[2];
  return audio;
}

module.exports = FlashcardView;
