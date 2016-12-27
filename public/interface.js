$( document ).ready(function() {
  var thermostat = new Thermostat();

  $("#table").fadeIn(3000);

  $.get("http://localhost:4567/thermostat/data", function(data){
    console.log(data);
    thermostat.setTemperature(data.temperature);
    $("#temperature").text(thermostat.temperature);
    $("#current-temperature-outside").text(data.city_temperature);
    $("#description").text(data.weather_description);
    $("#city").text(data.city);
  });

  $("#temperature-up").click(function( event ) {
    thermostat.up();
  });

  $("#temperature-down").click(function( event ) {
    thermostat.down();
  });

  $("#temperature-reset").click(function( event ) {
    thermostat.resetTemperature();
  });

  $("#powersavingmode").click(function( event ) {
    thermostat.switchPowerSavingMode();
  });

  function psmStatus() {
    if (thermostat.isInPowerSavingMode === true) {
      return "On";
    } else {
      return "Off";
    }
  };

  $("#select-city").submit(function(event) {
    event.preventDefault();
    var city = $("#current-city").val();
      displayTemperature(city) + "°C:" + displayWeatherDescription(city);
      $("#city").text(city);
    $.post("http://localhost:4567/thermostat/data",
      {temperature: thermostat.getTemperature(),
       city: city,
       city_temperature: displayTemperature(city),
       weather_description: displayWeatherDescription(city)});
  });

  function displayTemperature(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city
    var token = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed"
    var units = "&units=metric"
    $.get(url + token + units, function(data) {
      $("#current-temperature-outside").text(data.main.temp);
    });
  };

  function displayWeatherDescription(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city
    var token = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed"
    var units = "&units=metric"
    $.get(url + token + units, function(data) {
      $("#description").text(data.weather[0].description);
    });
  };

  $("button").click(function() {
    $("#temperature").text(thermostat.getTemperature());
    $("#energy-usage").text(thermostat.currentEnergyUsage());
    $("#energy-usage").attr('class', thermostat.currentEnergyUsage());
    $("#psm-status").text(psmStatus());
    $("#psm-status").attr('class', psmStatus());
    $.post("http://localhost:4567/thermostat/data", {temperature: thermostat.getTemperature()}
    );
  });
});
