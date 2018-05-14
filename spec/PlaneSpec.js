describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying when created", function() {
    expect(plane.isFlying()).toBeTruthy();
  });

  it("should be able to land plane", function() {
    plane.land();
    expect(plane.isFlying()).toBeFalsy();
  });

  it("should be able to take off plane", function() {
    plane.land();
    plane.takeOff();
    expect(plane.isFlying()).toBeTruthy();
  });

  it("shouldn't be able to land when landed", function() {
    plane.land();
    expect(function() {
        plane.land();
    }).toThrowError("Plane already landed");
  });

  it("shouldn't be able to take off when flying", function() {
    expect(function() {
        plane.takeOff();
    }).toThrowError("Plane already flying");
  });
});
