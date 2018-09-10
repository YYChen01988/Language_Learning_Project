const PubSub = require('../helpers/pub_sub');

const MapCountryFacts = function(container){
  this.container = container;
}


MapCountryFacts.prototype.bindEvents = function(){
  PubSub.subscribe("Map:countries-objects-ready", (event) => {
    const countries = event.detail;
    this.container.innerHTML = "";
    countries.forEach((country) => {
      const header = document.createElement('strong');
      header.textContent = country.nativeName;
      this.container.appendChild(header);

      const nativeName = document.createElement('p');
      nativeName.textContent = country.name;
      this.container.appendChild(nativeName);


      const population = document.createElement('p');
      population.textContent = "Population:" + country.population;
      this.container.appendChild(population);



    });
  });
};

module.exports = MapCountryFacts;
