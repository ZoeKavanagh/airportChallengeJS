function Plane() {
  this.flying = true;
}

Plane.prototype.isFlying = function() {
  return this.flying
};

Plane.prototype.land = function() {
  if (!this.isFlying()) {
    throw new Error("Plane already landed");
  }

  this.flying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying()) {
    throw new Error("Plane already flying");
  }

  this.flying = true
};
