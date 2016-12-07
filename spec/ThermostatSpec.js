'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should start with a temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should be able to increase the temperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

});
