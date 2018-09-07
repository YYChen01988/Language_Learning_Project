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
  languages.forEach((language, index) => {
    const languageOption = this.createOption(Object.keys(language.translation), index);
    languageOption.forEach(a)=>{
    }
    // console.log(languageOption);
    this.element.appendChild(languageOption);
    // console.log('each lang translation keys', Object.keys(language.translation));
    // console.log(languageOption);
  })
}

FlashcardSelectView.prototype.createOption = function(name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};

module.exports = FlashcardSelectView;
