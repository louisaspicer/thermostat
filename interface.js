$( document ).ready(function() {
  var thermostat = new Thermostat();

  refresh();

  $("#temperature-up").click(function( event ) {
    thermostat.up()
    refresh();
  });

  $("#temperature-down").click(function( event ) {
    thermostat.down()
    refresh();
  });

  $("#temperature-reset").click(function( event ) {
    thermostat.resetTemperature()
    refresh();
  });

  $("#powersavingmode").click(function( event ) {
    thermostat.switchPowerSavingMode();
    refresh();
  });

  $("#table").fadeIn(3000);

  function psmStatus() {
    if (thermostat.isInPowerSavingMode === true) {
      return "On";
    } else {
      return "Off";
    }
  }

  function refresh() {
    $("#temperature").text(thermostat.temperature);
    $("#energy-usage").text(thermostat.currentEnergyUsage());
    $("#energy-usage").attr('class', thermostat.currentEnergyUsage());
    $("#psm-status").text(psmStatus());
    $("#psm-status").attr('class', psmStatus());
  }

});
