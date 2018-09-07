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


module.exports = Flashcard;









// Countries.prototype.bindEvents = function () {
//   PubSub.subscribe('SelectView:change', (evt) => {
//     selectedIndex = evt.detail;
//     const selectedCountry = this.countries[selectedIndex];
//     PubSub.publish('Countries:selected-country-ready', selectedCountry);
//   });
// };
