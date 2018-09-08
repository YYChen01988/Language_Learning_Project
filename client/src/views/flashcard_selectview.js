const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const FlashcardSelectView = function(selectElement) {
  this.element = selectElement;
}

FlashcardSelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Languages:languages-data-ready', (event) => {
    // console.log(event.detail);
    this.populate(event.detail);
  });

  // this.element.addEventListener('change', (event) => {
  //   const selectedIndex = event.target.value;
  // })
}

FlashcardSelectView.prototype.populate = function(languages) {
  // console.log(languages);
  var languageOptions = [];
 languages.forEach((language, index) => {
   languageOptions = languageOptions.concat(Object.keys(language.translation));
 })
 languageOptions = new Set([...languageOptions]);
 console.log(languageOptions);
 languageOptions.forEach((element, index) => {
   const languageElement = this.createOption(element, index);
   this.element.appendChild(languageElement);
 });
}

FlashcardSelectView.prototype.createOption = function(name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};

module.exports = FlashcardSelectView;
