function Plane() {
  this.flying = true;
}

Plane.prototype.isFlying = function() {
  return this.flying
};

Plane.prototype.land = function() {
  this.flying = false;
};

Plane.prototype.takeOff = function() {
  this.flying = true;
};
