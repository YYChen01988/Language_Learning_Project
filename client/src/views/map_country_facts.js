const PubSub = require('../helpers/pub_sub');

const MapCountryFacts = function(container){
  this.container = container;
}


MapCountryFacts.prototype.bindEvents = function(){
  PubSub.subscribe("Map:countries-objects-ready", (event) => {
    const countries = event.detail;
    countries.forEach((country) => {
      const p = document.createElement('p');
      p.textContent = country.name;
      this.container.appendChild(p);

      // var population = country.population;
      // this.container.appendChild()


    });

  });
};

module.exports = MapCountryFacts;
