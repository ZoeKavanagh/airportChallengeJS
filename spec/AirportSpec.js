describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("planes", function() {
    it("is created with no planes", function () {
      expect(airport.planes).toEqual([]);
    });
  });

  describe("land", function() {
    it("is expected to land planes", function() {
      var flyingPlane = jasmine.createSpy('flyingPlane');
      airport.land(flyingPlane);
      expect(airport.planes).toContain(flyingPlane);
    });
  });

  describe("takeOff", function() {

    var landedPlane = jasmine.createSpy('landedPlane');

    it("is expected to return a taking off plane", function() {
      airport.planes = [landedPlane];
      expect(airport.takeOff(landedPlane)).toEqual(landedPlane);
    });

    it("is expected to no longer contain plane after takeOff", function() {
      airport.planes = [landedPlane];
      airport.takeOff(landedPlane);
      expect(airport.planes).toEqual([]);
    });
  });


});
