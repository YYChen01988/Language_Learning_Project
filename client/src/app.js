
const Flashcard = require('./models/flashcard.js');
const FlashcardView = require('./views/flashcard_view.js');
const FlashcardGridView = require('./views/flashcard_grid_view');
const FlashcardSelectView = require('./views/flashcard_selectview');

document.addEventListener('DOMContentLoaded', () => {

  const wordsUrl = 'http://localhost:3000/api/words';
  const flashcard = new Flashcard(wordsUrl);
  flashcard.getData();

  const selectElement = document.querySelector('select#chosen-language');
  const selectView = new FlashcardSelectView(selectElement);
  selectView.bindEvents();

});
