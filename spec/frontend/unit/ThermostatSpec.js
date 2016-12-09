"use strict";

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('should start at 20 degrees',function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase the temperature", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease the temperature',function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('should be unable to go below 10 degrees', function(){
    for (var i = 0; i < 14; i++ ){
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('should be unable to go above 25 degrees',function(){
    for(var i=0; i< 56; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it("should be able to change power saving mode", function(){
    thermostat.changePowerSaving();
    expect(thermostat.isPowerSaving).toBeFalsy();
  });

  it("should be able to turn on the power saving mode ", function(){
      thermostat.changePowerSaving();
      thermostat.changePowerSaving();
    expect(thermostat.isPowerSaving).toBeTruthy();
  });
  it("should have a max temperature of 32 if not power saving", function(){
    thermostat.changePowerSaving();
    for(var i=0; i< 60; i++){
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it("should be able to reset the temperature to 20 degrees", function(){
    for(var i=0; i< 35; i++){
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  describe("Presentation", function(){
    it("should display medium-usage for temps under 25", function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it("should display low-usage for temps under 18",function(){
      for(var i=0; i<3; i++){
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it("should display high-usage otherwise", function(){
      for(var i = 0; i < 10; i++){
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })
  });
});
