function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  return this.planes.splice(this._planeIndex(plane), 1)[0];
};

Airport.prototype._planeIndex = function(plane) {
  var index = this.planes.indexOf(plane);
};
