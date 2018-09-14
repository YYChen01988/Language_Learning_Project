const PubSub = require('../helpers/pub_sub');

const MapWrapper = function(container){
  this.container = container;
  this.coords = [55.8654192, -4.258020999999999];
  this.map = L.map(this.container);
  this.osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map.setView(this.coords, 1).addLayer(this.osmLayer);
  this.markers = []
}

MapWrapper.prototype.bindEvents = function(){
  PubSub.subscribe("Map:countries-objects-ready", (event) => {
    this.markers.forEach((m)=>{
      this.map.removeLayer(m);
    });
    this.markers = [];
    const countries = event.detail;
    countries.forEach((country) => {
      var coordinates = country.latlng;
      this.map.setView(coordinates,5);
      var m = L.marker(coordinates);
      this.markers.push(m);
      m.addTo(this.map);
    });
  });
};

module.exports = MapWrapper;
