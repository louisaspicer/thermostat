ENV["RACK_ENV"] ||= "development"

require 'sinatra/base'
require './models/thermostat.rb'
require 'json'

class Thermostat < Sinatra::Base
  get '/' do
    erb :index
  end

  get '/thermostat/data' do
    thermostat = ThermostatData.get(1)
    content_type :json
    {temperature: thermostat.temperature,
     city: thermostat.city,
     city_temperature: thermostat.city_temperature,
     weather_description: thermostat.weather_description}.to_json
  end

  post '/thermostat/data' do
    thermostat = ThermostatData.get(1)
    thermostat.temperature = params[:temperature]
    thermostat.city = params[:city]
    thermostat.city_temperature = params[:city_temperature]
    thermostat.weather_description = params[:weather_description]
    thermostat.save
  end

  run! if app_file == $0

end
