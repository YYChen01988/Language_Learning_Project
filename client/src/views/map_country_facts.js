const PubSub = require('../helpers/pub_sub');

const MapCountryFacts = function(container){
  this.container = container;
}

MapCountryFacts.prototype.bindEvents = function(){
  PubSub.subscribe("Map:countries-objects-ready", (event) => {
    const countries = event.detail;
    this.container.innerHTML = "";
    countries.forEach((country) => {

      const countrys = document.createElement('div');

      const header = document.createElement('strong');
      header.textContent = "Native name: " + country.nativeName;
      countrys.appendChild(header);

      const nativeName = document.createElement('p');
      nativeName.textContent = "Country name: " + country.name;
      countrys.appendChild(nativeName);

      const population = document.createElement('p');
      population.textContent = "Population: " + country.population;
      countrys.appendChild(population);

      this.container.appendChild(countrys);
    });
  });
};

module.exports = MapCountryFacts;
