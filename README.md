# Thermostat App - Makers Academy Week 5 #

This week we started to learn about Javascript and test-drive our code through the testing framework Jasmine.

One of the challenges in week 5 was to build the business logic to model a simple thermostat, and learn to hook it up to a dynamic visual interface using jQuery - all within the browser.

## How to open: ##

  * Clone this repo to your machine and `cd` into that directory.
  * To open the app, run `open index.html` in the command line.
  * To run the Jasmine tests, run 'open SpecRunner.html` in the command line.
  
## How to use the app: ##
  * To view the weather in your city, type in your city and click the submit page
  * This should then update the degrees below the input box and also show a short description of the weather.
  * Click the sun button to turn the temperature 'up'
  * Click the snowflake button to turn the temperature 'down'
  * If the temperature is 25 degrees or higher, the Energy Usage should show 'high-usage' in red.
  * If the temperature is between 18-25 degrees, the Energy Usage should show 'medium-usage' in black.
  * If the temperature is lower than 18 degrees, the Energy Usage should show 'low-usage' in green.
  * Click the reset button, to change the temperature back to 20 degrees.
  * Click the PSM button to toggle to Power Saving Mode on/off. 
  * If power saving mode is on, you cannot go above 25 degrees.
  * If power saving mode is off, you can go up to 32 degrees, which is the maximum temperature.
  * The minimum temperature is 10 degrees.

### Future changes to implement ###
  * Complete building my own web server to provide an API, using Sinatra.
  * Update the Javascript user interface so that it can communicate with the API through GET and POST requests.
  * Save the selected city using the API.
 
