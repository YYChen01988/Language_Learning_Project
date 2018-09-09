const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Flashcard = function(url) {
  this.url = url;
  this.request = new Request(this.url);
  this.languages = [];
};

// Map
Flashcard.prototype.languageIncludes = function(languageName, languagesList) {
  for (var i = 0; i< languagesList.length; i++ ) {
    if(languagesList[i].name == languageName) {
      return true
    };
  }
  return false;
}

Flashcard.prototype.bindEvents = function(){
  PubSub.subscribe("SelectView:language_name-selected", (event) => {
    var language_name = event.detail;
    var selected_country = [];
    this.countries.forEach((country) => {

      if(this.languageIncludes(language_name, country.languages)) {
        selected_country.push(country);
      }
    });
    // console.log(selected_country)
    PubSub.publish("LanguageList:country-ready", selected_country)
  })
}

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
    languages.forEach((language) => {
      // console.log(language, event);
      const selectedKeys=Object.keys(language.translation);
      if (selectedKeys.includes(event.detail)){
        selectedLanguageWords.push([language.translation[event.detail], language.English]);
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
