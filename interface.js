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

  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $("#current-city").val();
      displayWeather(city);
  });

  function displayWeather(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city
    var token = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed"
    var units = "&units=metric"
    $.get(url + token + units, function(data) {
      $("#current-temperature-outside").text(data.main.temp);
      $("#description").text(data.weather[0].description);
    })
  }


  function refresh() {
    $("#temperature").text(thermostat.temperature);
    $("#energy-usage").text(thermostat.currentEnergyUsage());
    $("#energy-usage").attr('class', thermostat.currentEnergyUsage());
    $("#psm-status").text(psmStatus());
    $("#psm-status").attr('class', psmStatus());
  }

});