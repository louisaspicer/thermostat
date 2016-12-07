'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start with a temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be in power saving mode by default', function() {
    expect(thermostat.isInPowerSavingMode).toEqual(true);
  });

  it('should be able to increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should be able to decrease the temperature', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('should have a minimum temperature', function() {
    expect(thermostat.minimum).toEqual(10);
  });

  it('should not be able to decrease temperature below 10', function() {
    thermostat.temperature = thermostat.minimum
    expect(function(){ thermostat.down(); }).toThrowError("At minimum temperature")
  });

  it('has a maximum temperature of 25 when in power saving mode', function() {
    expect(thermostat.maximum).toEqual(25);
  });

  it('should not be able to increase temperature above 25', function() {
    thermostat.temperature = thermostat.maximum
    expect(function(){ thermostat.up(); }).toThrowError("At maximum temperature")
  });

  it('should be able to reset temperature to 20', function() {
    thermostat.up();
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('should have low energy usage if temp is below 18', function() {
    thermostat.temperature = 17;
    expect(thermostat.currentEnergyUsage()).toEqual("low-usage");
  });

  it('should have medium energy usage if temp is between 18 and 25', function() {
    expect(thermostat.currentEnergyUsage()).toEqual("medium-usage");
  })

  it('should have high energy usage if temp is 25 or over', function() {
    thermostat.temperature = 26
    expect(thermostat.currentEnergyUsage()).toEqual("high-usage");
  });

  describe('When not in power saving mode', function() {

    beforeEach(function() {
      thermostat.switchPowerSavingMode();
    });

    it('power saving mode is off', function() {
      expect(thermostat.isInPowerSavingMode).toEqual(false);
    });

    it('can switch power saving mode back on', function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.isInPowerSavingMode).toEqual(true);
    });

    it('has a maximum temperature of 32', function() {
      expect(thermostat.maximum).toEqual(32);
    });

    it('should not be able to increase temperature above 32', function() {
      thermostat.temperature = thermostat.maximum
      expect(function(){ thermostat.up(); }).toThrowError("At maximum temperature")
    });

  });


});
