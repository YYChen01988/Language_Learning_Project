const Flashcard = require('./models/flashcard.js');
const FlashcardView = require('./views/flashcard_view.js');
const FlashcardListView = require('./views/flashcard_list_view');
const FlashcardSelectView = require('./views/select_view');
const AddWordFormView = require('./views/add_word_form_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const wordsUrl = 'http://localhost:3000/api/words';
  const flashcard = new Flashcard(wordsUrl);
  flashcard.getData();
  flashcard.bindEvents();

  // const addWordForm = document.querySelector("#item-form")
  // const addWordFormView = new AddWordFormView(addWordForm);
  // addWordFormView.bindEvents();

  const selectElement = document.querySelector('select#chosen-language');
  const selectView = new FlashcardSelectView(selectElement);
  selectView.bindEvents();

  const flashcardListContainer = document.querySelector('#phrases');
  const flashcardListView = new FlashcardListView(flashcardListContainer);
  flashcardListView.bindEvents();
});
