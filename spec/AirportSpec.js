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
    var flyingPlane = jasmine.createSpy('flyingPlane');
    var flyingPlane2 = jasmine.createSpy('flyingPlane2');
    var flyingPlane3 = jasmine.createSpy('flyingPlane3');
    var flyingPlane4 = jasmine.createSpy('flyingPlane4');
    var weather;

    beforeEach(function() {
      weather = {
        isStormy: function() {}
      };
    });

    it("is expected to land planes", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.land(flyingPlane, weather);
      expect(airport.planes).toContain(flyingPlane);
    });

    it("will not land plane when weather is stormy", function() {
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(function(){
        airport.land(flyingPlane, weather);
      }).toThrowError("It's too stormy!")
    });

    it("will not land plane if capacity is full", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.land(flyingPlane, weather);
      airport.land(flyingPlane2, weather);
      airport.land(flyingPlane3, weather);
      expect(function() {
        airport.land(flyingPlane4, weather);
      }).toThrowError("The airport is full!")
    });
  });

  describe("takeOff", function() {

    var landedPlane = jasmine.createSpy("landedPlane");
    var otherLandedPlane = jasmine.createSpy("otherLandedPlane");
    var weather;

    beforeEach(function() {
      weather = {
        isStormy: function() {}
      };
    });

    it("is expected to return a taking off plane", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.planes = [landedPlane];
      expect(airport.takeOff(landedPlane, weather)).toEqual(landedPlane);
    });

    it("is expected to no longer contain plane after takeOff", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.planes = [landedPlane];
      airport.takeOff(landedPlane, weather);
      expect(airport.planes).toEqual([]);
    });

    it("still contains one plane after another takes off", function() {
      spyOn(weather, "isStormy").and.returnValue(false);
      airport.planes = [landedPlane, otherLandedPlane];
      airport.takeOff(otherLandedPlane, weather);
      expect(airport.planes).toEqual([landedPlane])
    });

    it("will not take off planes in stormy weather", function() {
      spyOn(weather, "isStormy").and.returnValue(true);
      airport.planes = [landedPlane];
      expect(function() {
        airport.takeOff(landedPlane, weather);
      }).toThrowError("It's too stormy!");
    });
  });

});
