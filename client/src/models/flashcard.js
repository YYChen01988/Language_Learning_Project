const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Flashcard = function(url) {
  this.url = url;
  this.request = new Request(url);
};

Flashcard.prototype.getData = function(){
  this.request.get()
  .then((languages) => {
    PubSub.publish('Languages:languages-data-ready', languages);
    // console.log(languages);
  })
  .catch(console.error);
};





// CurrencyList.prototype.bindEvents = function(){
//   PubSub.subscribe("FlashcardSelectView:language_name-selected", (event) => {
//     var currency_name = event.detail;
//     var selected_country = [];
//     this.countries.forEach((country) => {
//
//       if(this.currencyIncludes(currency_name, country.currencies)) {
//         selected_country.push(country);
//       }
//     });
//     // console.log(selected_country)
//     PubSub.publish("CurrencyList:country-ready", selected_country)
//   })
// }







module.exports = Flashcard;
