const PubSub = require('../helpers/pub_sub');

const MapCountryFacts = function(container){
  this.container = container;
}


MapCountryFacts.prototype.bindEvents = function(){
  PubSub.subscribe("Map:countries-objects-ready", (event) => {
    const countries = event.detail;
    this.container.innerHTML = "";
    countries.forEach((country) => {
      const p = document.createElement('p');
      p.textContent = country.name;
      this.container.appendChild(p);
    });
  });
};

module.exports = MapCountryFacts;
