function Airport() {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather.isStormy()) {
    throw new Error("It's too stormy!");
  }

  return this.planes.splice(this._planeIndex(plane), 1)[0];
};

Airport.prototype._planeIndex = function(plane) {
  return this.planes.indexOf(plane);
};

// if (!this.isFlying()) {
//   throw new Error("Plane already landed");
// }
