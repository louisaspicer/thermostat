'use strict';

function Thermostat() {
  this.temperature = 20;
  this.minimum = 10;
  this.isInPowerSavingMode = true;
}

Thermostat.prototype.up = function() {
  this.temperature++
}

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) {
    throw TypeError("At minimum temperature")
  } else {
    this.temperature--
  }
}

Thermostat.prototype.switchPowerSavingMode = function() {
  this.isInPowerSavingMode = false;
}
