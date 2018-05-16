var WEATHER = ['fine', 'fine', 'fine', 'fine', 'stormy'];

function Weather(){


}

Weather.prototype.randomiser = function(){
  return WEATHER[Math.floor(Math.random() * WEATHER.length)];

}

Weather.prototype.isStormy = function(){

  return this.randomiser() === 'stormy';

}
