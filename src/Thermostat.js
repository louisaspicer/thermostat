'use strict';

function Thermostat() {
  this.temperature = 20;
  this.minimum = 10
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
