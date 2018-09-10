const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Flashcard = function(url) {
  this.url = url;
  this.request = new Request(this.url);
  this.languages = [];
};

Flashcard.prototype.getCountryLocations = function(selectedLanguage){
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get()
    .then((data) => {
  this.countries = data;
  var matchingCountries = this.countries.filter((country) => {
    return country.languages.filter((language) => {
      return (language.name === selectedLanguage)
    }).length;
  });
  PubSub.publish("Map:countries-objects-ready", matchingCountries);
  });
};

// Flashcard
Flashcard.prototype.bindEvents = function(){
  PubSub.subscribe('AddWordFormView:item-submitted', (event) => {
    this.postWord(event.detail);
  });
};

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

  PubSub.subscribe("SelectView:change", (event) => {
    const selectedLanguageWords =[];
    this.languages.forEach((language) => {
      if (language.translation.hasOwnProperty(event.detail)){
        console.log(this.languages);

        console.log('language.audio', language.audio);
        console.log('event detail',event.detail);
        const audio = language.audio[event.detail];
        console.log("Audio",audio);
        selectedLanguageWords.push([language.translation[event.detail], language.English, language.audio[event.detail]]);
        console.log(selectedLanguageWords);
      };
    });
    PubSub.publish("Flashcard:selected-language-and-answer", selectedLanguageWords);
    this.getCountryLocations(event.detail);
    // console.log(selectedLanguageWords);
  });
};

Flashcard.prototype.postWord = function(word){
  // console.log('what is the word:', word);
  this.request.post(word)
  .then((languages) => {
    PubSub.publish('Languages:languages-data-ready', languages);
    // console.log("languages is:", languages);
  })
  .catch(console.error);
};

module.exports = Flashcard;
