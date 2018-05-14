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
});
