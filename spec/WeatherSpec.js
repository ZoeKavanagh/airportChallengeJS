describe("Weather", function(){

  beforeEach(function(){
    weather = new Weather();

  });

  describe("randomiser", function(){

    it("gives random weather condition", function(){
      var weatherArray = [];
      for (i=0; i <= 100; i++){
        weatherArray.push(weather.randomiser()) ;
      }
      expect(weatherArray).toContain("stormy");
      expect(weatherArray).toContain("fine");

    });


  });

  describe("isStormy", function(){

    it('returns true if weather is stormy', function(){
      spyOn(weather, "randomiser").and.returnValue("stormy");
      expect(weather.isStormy()).toEqual(true);

    });

    it('returns false if weather is fine', function(){
      spyOn(weather, "randomiser").and.returnValue("fine");
      expect(weather.isStormy()).toEqual(false);

    });

  });


});
