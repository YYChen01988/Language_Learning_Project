const Flashcard = require('./models/flashcard.js');
const FlashcardView = require('./views/flashcard_view.js');
const FlashcardListView = require('./views/flashcard_list_view');
const FlashcardSelectView = require('./views/select_view');
const MapWrapper = require('./views/map_wrapper.js');
const AddWordFormView = require('./views/add_word_form_view.js');
const QuizListView = require('./views/quiz_list_view.js');
const Quiz = require('./models/quiz.js');
const QuizView = require('./views/quiz_view.js');
const AnswerListView = require('./views/answer_list_view.js')

const MapCountryFacts = require('./views/map_country_facts.js');

document.addEventListener('DOMContentLoaded', () => {

  const wordsUrl = 'http://localhost:3000/api/words';
  const flashcard = new Flashcard(wordsUrl);
  flashcard.getData();
  flashcard.bindEvents();

  const quizUrl = 'http://localhost:3000/api/quiz';
  const quiz = new Quiz(quizUrl);
  quiz.getQuizData();

  const selectE = document.querySelector('#answer');
  const answerListView = new AnswerListView(selectE);
  answerListView.bindEvents();

  const selectElement = document.querySelector('select#chosen-language');
  const selectView = new FlashcardSelectView(selectElement);
  selectView.bindEvents();

  const flashcardListContainer = document.querySelector('#phrases');
  const flashcardListView = new FlashcardListView(flashcardListContainer);
  flashcardListView.bindEvents();

  const quizListContainer = document.querySelector('#quiz');
  const quizListView = new QuizListView(quizListContainer, answerListView);
  quizListView.bindEvents();

  const mainMap = document.querySelector('#map-container');
  const mapWrapper = new MapWrapper(mainMap);
  mapWrapper.bindEvents();

  const countryFacts = document.querySelector('#map-country-facts');
  const mapCountryFacts = new MapCountryFacts(countryFacts);
  mapCountryFacts.bindEvents();

  const addWordForm = document.querySelector("#item-form")
  const addWordFormView = new AddWordFormView(addWordForm);
  addWordFormView.bindEvents();

});
