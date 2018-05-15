describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("planes", function() {
    it("is created with no planes", function () {
      expect(airport.planes).toEqual([])
    });
  });

  describe("land", function() {
    it("is expected to land planes", function() {
      var flyingPlane = jasmine.createSpy('flyingPlane');
      airport.land(flyingPlane);
      expect(airport.planes).toContain(flyingPlane)
    });
  });
});
