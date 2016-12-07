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
    thermostat.temperature = 10
    expect(function(){ thermostat.down(); }).toThrowError("At minimum temperature")
  });

  // it('has a maximum temperature of 25 when in power saving mode', function() {
  //   expect(thermostat.maximum())
  // });

  it('can switch power saving mode off', function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.isInPowerSavingMode).toEqual(false);
  });


});
