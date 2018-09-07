const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const FlashcardSelectView = function(selectElement) {
  this.element = selectElement;
}

FlashcardSelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Languages:languages-data-ready', (event) => {
    console.log(event.detail);
    // this.populate(event.detail);
  });

  // this.element.addEventListener('change', (event) => {
  //   const selectedIndex = event.target.value;
  // })
}

module.exports = FlashcardSelectView;
