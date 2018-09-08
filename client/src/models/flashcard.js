const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Flashcard = function(url) {
  this.url = url;
  this.request = new Request(url);
  this.languages = [];
};

Flashcard.prototype.bindEvents = function(){
  // PubSub.subscribe("FlashcardSelectView:language-name-selected", (event) => {
  //
  // });
}

Flashcard.prototype.getData = function(){
  this.request.get()
  .then((languages) => {
    PubSub.publish('Languages:languages-data-ready', languages);
    // console.log(languages);
    this.publishByLanguage(languages);
  })
  .catch(console.error);
};

Flashcard.prototype.publishByLanguage = function(languages){
  this.languages = languages;

  PubSub.subscribe("FlashcardSelectView:language-name-selected", (event) => {
    const selectedLanguageWords =[];
    languages.forEach((language) => {
      // console.log(language, event);
      const selectedKeys=Object.keys(language.translation);
      if (selectedKeys.includes(event.detail)){
        selectedLanguageWords.push([language.translation[event.detail], language.English]);
      };
    });
    PubSub.publish("Flashcard:selected-language-and-answer", selectedLanguageWords);
    // console.log(selectedLanguageWords);
  });
};

module.exports = Flashcard;
